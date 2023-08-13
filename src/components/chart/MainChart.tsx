import { useQuery } from 'react-query';
import { getCandles } from '@/api/candles';
import { useRecoilState } from 'recoil';
import { intervalState } from '@/recoil/interval/atoms';
import { ChartComponent } from './ChartComponent';
import { OhlcData, UTCTimestamp } from 'lightweight-charts';
import { symbolState } from '@/recoil/symbol/atoms';

export default function MainChart() {
  const [symbol] = useRecoilState(symbolState);
  const [interval] = useRecoilState(intervalState);

  const { data, isLoading } = useQuery<Array<[number, string, string, string, string]>>(
    ['getCandles', symbol, interval],
    getCandles
  );

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No Data!</div>;

  const candleSticks: OhlcData[] = data.map((d) => {
    const [timestamp, open, high, low, close] = d;
    return {
      open: parseInt(open),
      high: parseInt(high),
      low: parseInt(low),
      close: parseInt(close),
      time: (timestamp / 1000) as UTCTimestamp,
    };
  });

  console.log(candleSticks);

  const chartWidth = document.body.offsetWidth;
  const chartHeight = document.body.offsetHeight;

  return <ChartComponent data={candleSticks} width={chartWidth} height={chartHeight} />;
}
