import { useTheme } from '@mui/material';
import dayjs from 'dayjs';
import {
  CandlestickData,
  ChartOptions,
  CrosshairMode,
  DeepPartial,
  Time,
  WhitespaceData,
  createChart,
} from 'lightweight-charts';
import React from 'react';
import { useEffect, useMemo, useRef } from 'react';

interface IChartComponetProps {
  data: (WhitespaceData | CandlestickData)[];
}

function ChartComponent({ data }: IChartComponetProps): JSX.Element {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const chartConfig: DeepPartial<ChartOptions> = useMemo(
    () => ({
      layout: {
        background: { color: theme.main.chart.background },
        textColor: theme.main.chart.text,
      },
      leftPriceScale: { autoScale: false },
      crosshair: { mode: CrosshairMode.Normal },
      localization: {
        timeFormatter: (time: Time) => {
          const date = dayjs(Number.parseInt(time.toString()) * 1000);
          return date.format('YYYY-MM-DD hh:mm');
        },
      },
      grid: {
        vertLines: { color: theme.main.chart.grid },
        horzLines: { color: theme.main.chart.grid },
      },
      width: document.body.offsetWidth - 50,
      height: document.body.offsetHeight - 100,
      timeScale: {
        tickMarkFormatter: (time: Time) => {
          const date = dayjs(Number.parseInt(time.toString()) * 1000);
          return date.format('hh:mm:ss');
        },
      },
    }),
    [theme]
  );

  useEffect(() => {
    const chart = createChart(chartContainerRef.current as HTMLDivElement, chartConfig);
    chart.timeScale().resetTimeScale();
    chart.timeScale().fitContent();

    const newSeries = chart.addCandlestickSeries();
    newSeries.setData(data);

    const handleResize = () => {
      chart.applyOptions({ width: document.body.offsetWidth, height: document.body.offsetHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [chartConfig, data]);

  return <div ref={chartContainerRef} />;
}

export default React.memo(ChartComponent);
