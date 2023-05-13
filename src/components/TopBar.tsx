import { Button } from '@mui/material';
import { useState } from 'react';
import FlexBox from './FlexBox';
import SymbolDialog from './dialog/SymbolDialog';

export default function TopBar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SymbolDialog open={open} onClose={handleClose} />
      <FlexBox
        sx={{
          flexDirection: 'row',
          justifyContent: 'start',
          height: '50px',
          backgroundColor: 'primary.main',
          marginBottom: 1,
          paddingX: '1rem',
          paddingY: '0.3rem',
        }}
      >
        <Button
          sx={{
            height: '100%',
            color: '#2962FF',
            fontSize: '15px',
            fontWeight: 800,
            '&:hover': {
              backgroundColor: '#242628',
              // borderColor: '#0062cc',
              boxShadow: 'none',
            },
          }}
          onClick={handleOpen}
        >
          {/* {symbol} */}
          BTCUSDT
        </Button>
      </FlexBox>
    </>
  );
}
