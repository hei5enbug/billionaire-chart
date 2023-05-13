import FlexBox from '@/components/FlexBox';
import TopBar from '@/components/TopBar';
import MainChart from '@/components/chart/MainChart';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return (
    <FlexBox
      sx={{
        flexDirection: 'row',
        height: 'calc(100% - 60px)',
        overflowY: 'hidden',
        backgroundColor: 'primary.main',
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
