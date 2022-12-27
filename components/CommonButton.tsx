import Button, { ButtonProps } from '@mui/material/Button';
import { ReactNode } from 'react';

interface CommonButtonProps {
  children: ReactNode;
}

export default function CommonButton({ children }: CommonButtonProps) {
  return <Button sx={{ backgroundColor: 'white' }}>{children}</Button>;
}
