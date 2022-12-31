'use client';
import FlexBox from './FlexBox';

export default function AppBar() {
  return (
    <FlexBox
      sx={{
        height: '3rem',
        backgroundColor: 'primary.main',
        marginBottom: 1,
      }}
    >
      AppBar
    </FlexBox>
  );
}
