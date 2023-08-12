import { StockConfig } from '@ant-design/plots';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import { useQuery } from 'react-query';
import { ICandleInfo } from '../../interface/candle';
import { getCandles } from '@/api/candles';
import { useRecoilState } from 'recoil';
import { intervalState } from '@/recoil/interval/atoms';

export default function MainChart() {
  const [interval] = useRecoilState(intervalState);
  const { data, isLoading } = useQuery<Array<any[]>>(
    ['getCandles', 'BTCUSDT', interval],
    getCandles
  );

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No Data!</div>;

  const Stock = dynamic(() => import('@ant-design/plots').then(({ Stock }) => Stock), {
    ssr: false,
  });
  const StockData: ICandleInfo[] = data.map((d) => {
    const [trade_date, open, high, low, close, vol] = d;

    return {
      ts_code: '000001.SH',
      trade_date: trade_date,
      open: parseInt(open),
      close: parseInt(close),
      high: parseInt(high),
      low: parseInt(low),
      vol: parseInt(vol),
      amount: 0,
    };
  });

  const config: StockConfig = {
    data: StockData,
    padding: 100,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
    meta: {
      trade_date: {
        formatter: (value) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'),
      },
    },
    fallingFill: '#ef5350',
    risingFill: '#26a69a',
    yAxis: {
      grid: {
        line: { style: { lineWidth: 0 } },
      },
    },
    animation: false,
    tooltip: {
      crosshairs: {
        text: (type: string, defaultContent: any) => {
          if (type === 'x') {
            return { content: dayjs(defaultContent).format('YYYY-MM-DD HH:mm:ss') };
          }
          if (type === 'y') {
            return { content: (defaultContent as Number).toFixed(2) };
          }
          return { content: defaultContent };
        },
      },
    },
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Stock {...config} />
    </Box>
  );
}
