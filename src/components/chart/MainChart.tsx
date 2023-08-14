import { useQuery } from 'react-query';
import { getCandles } from '@/api/candles';
import { useRecoilState } from 'recoil';
import { intervalState } from '@/recoil/interval/atoms';
import { UTCTimestamp } from 'lightweight-charts';
import { symbolState } from '@/recoil/symbol/atoms';
import ChartComponent from './ChartComponent';
import { useMemo } from 'react';

export default function MainChart() {
  const [symbol] = useRecoilState(symbolState);
  const [interval] = useRecoilState(intervalState);

  const { data, isLoading } = useQuery<Array<[number, string, string, string, string]>>(
    ['getCandles', symbol, interval],
    getCandles
  );

  const candleSticks = useMemo(() => {
    return data ? data.map((d) => {
      const [timestamp, open, high, low, close] = d;
      return {
        open: parseInt(open),
        high: parseInt(high),
        low: parseInt(low),
        close: parseInt(close),
        time: (timestamp / 1000) as UTCTimestamp,
      };
    }) : [];
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No Data!</div>;

  return <ChartComponent data={candleSticks} />;
}
