import FlexBox from '@/components/FlexBox';
import TopBar from '@/components/TopBar';
import MainChart from '@/components/chart/MainChart';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import { useTheme } from '@mui/material';

const Page: NextPageWithLayout = () => {
  const theme = useTheme();

  return (
    <FlexBox
      sx={{
        flexDirection: 'row',
        height: 'calc(100% - 60px)',
        overflowY: 'hidden',
        backgroundColor: theme.main.background,
      }}
    >
      <MainChart />
    </FlexBox>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <main>
      <TopBar />
      {page}
    </main>
  );
};

export default Page;
