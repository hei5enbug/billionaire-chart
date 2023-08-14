import { intervalState } from '@/recoil/interval/atoms';
import { Button, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

interface ITimeFrameButtonProps {
  children: ReactNode;
}

export default function TimeFrameButton({ children }: ITimeFrameButtonProps) {
  const [interval, setInterval] = useRecoilState(intervalState);
  const theme = useTheme();

  const handleClick = () => {
    setInterval(children ? children.toString() : '');
  };

  const isSelected = interval === children?.toString();

  return (
    <Button
      sx={{
        minWidth: '3rem',
        height: '100%',
        color: isSelected ? theme.main.topbar.interval.selected : theme.main.topbar.interval.display,
        fontSize: '15px',
        fontWeight: 800,
        padding: 0,
        textTransform: 'none',
        '&:hover': {
          backgroundColor: theme.main.topbar.hover,
          boxShadow: 'none',
        },
      }}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
