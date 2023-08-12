import { intervalState } from '@/recoil/interval/atoms';
import { Button } from '@mui/material';
import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

interface ITimeFrameButtonProps {
  children: ReactNode;
}

export default function TimeFrameButton({ children }: ITimeFrameButtonProps) {
  const [interval, setInterval] = useRecoilState(intervalState);

  const handleClick = () => {
    setInterval(children ? children.toString() : '');
  };

  const isSelected = interval === children?.toString();

  return (
    <Button
      sx={{
        minWidth: '3rem',
        height: '100%',
        color: isSelected ? 'yellow' : '#999999',
        fontSize: '15px',
        fontWeight: 800,
        padding: 0,
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#242628',
          boxShadow: 'none',
        },
      }}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
