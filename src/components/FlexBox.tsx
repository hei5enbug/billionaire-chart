import { Box, SxProps } from '@mui/material';
import { ReactNode } from 'react';

interface FlexBoxProps {
  sx?: SxProps;
  children: ReactNode;
}

export default function FlexBox({ sx, children }: FlexBoxProps) {
  return (
    <Box sx={sx} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {children}
    </Box>
  );
}
