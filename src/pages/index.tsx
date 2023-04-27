import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import FlexBox from '@/components/FlexBox';
import TopBar from '@/components/TopBar';
import SymbolList from '@/components/SymbolList';
import { Typography } from '@mui/material';

const Page: NextPageWithLayout = () => {
  return (
    <FlexBox
      sx={{
        height: '100%',
        overflowY: 'hidden',
        backgroundColor: 'primary.main',
      }}
    >
      <Typography>Main</Typography>
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
