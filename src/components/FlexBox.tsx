import { Box, SxProps } from '@mui/material';
import { ReactNode } from 'react';

interface IFlexBoxProps {
  sx?: SxProps;
  children: ReactNode;
}

export default function FlexBox({ sx, children }: IFlexBoxProps) {
  return (
    <Box sx={sx} display="flex" justifyContent="center" alignItems="center">
      {children}
    </Box>
  );
}
