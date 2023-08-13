import { CandlestickData, WhitespaceData, createChart } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

interface IChartComponetProps {
  data: (WhitespaceData | CandlestickData)[];
  width: number;
  height: number;
}

export const ChartComponent = ({ data, width, height }: IChartComponetProps) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: 1000 });
    };

    const chart = createChart(chartContainerRef.current as HTMLDivElement, {
      width: width,
      height: height,
    });
    chart.timeScale().resetTimeScale();
    chart.timeScale().fitContent();

    const newSeries = chart.addCandlestickSeries();
    newSeries.setData(data);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [data]);

  return <div ref={chartContainerRef} />;
};
