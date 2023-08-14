import { Button, useTheme } from '@mui/material';
import FlexBox from './FlexBox';
import SymbolDialog from './symbol/SymbolDialog';
import { symbolDialogState, symbolState } from '@/recoil/symbol/atoms';
import { useRecoilState } from 'recoil';
import TimeFrameList from './timeframe/TimeFrameList';

export default function TopBar() {
  const [symbol] = useRecoilState(symbolState);
  const [symbolDialogOpen, setSymbolDialogOpen] = useRecoilState(symbolDialogState);
  const theme = useTheme();

  const handleOpen = () => {
    setSymbolDialogOpen(true);
  };
  const handleClose = () => {
    setSymbolDialogOpen(false);
  };

  return (
    <>
      <SymbolDialog open={symbolDialogOpen} onClose={handleClose} />
      <FlexBox
        sx={{
          flexDirection: 'row',
          justifyContent: 'start',
          height: '50px',
          backgroundColor: theme.main.background,
          marginBottom: 1,
          paddingX: '1rem',
          paddingY: '0.3rem',
        }}
      >
        <Button
          sx={{
            height: '100%',
            color: theme.main.topbar.symbol,
            fontSize: '15px',
            fontWeight: 800,
            '&:hover': {
              backgroundColor: theme.main.topbar.hover,
              boxShadow: 'none',
            },
            marginRight: '1.5rem',
          }}
          onClick={handleOpen}
        >
          {symbol}
        </Button>

        <TimeFrameList />
      </FlexBox>
    </>
  );
}
