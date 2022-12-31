'use client';
import FlexBox from './components/FlexBox';

export default function Home() {
  return (
    <FlexBox
      sx={{
        backgroundColor: 'primary.main',
        border: 'solid 1px grey',
      }}
    >
      Main
    </FlexBox>
  );
}
