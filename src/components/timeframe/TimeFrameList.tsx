import TimeFrameButton from './TimeFrameButton';

export default function TimeFrameList() {
  const timeFrames = ['1m', '5m', '15m', '30m', '1h', '4h', '1d'];

  return (
    <>
      {timeFrames.map((timeFrame, index) => (
        <TimeFrameButton key={`timeframe-button-${index}`}>{timeFrame}</TimeFrameButton>
      ))}
    </>
  );
}
