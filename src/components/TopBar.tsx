import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import FlexBox from './FlexBox';
import React from 'react';

export default function TopBar() {
  const [symbol, setSymbol] = useState('BTCUSDT');

  const handleChange = (event: SelectChangeEvent) => {
    setSymbol(event.target.value as string);
  };

  return (
    <FlexBox
      sx={{
        backgroundColor: 'primary.main',
        marginBottom: 1,
      }}
    >
      <FormControl fullWidth>
        <Select value={symbol} defaultValue="10" onChange={handleChange}>
          <MenuItem value="BTCUSDT">BTCUSDT</MenuItem>
          <MenuItem value="ETHUSDT">ETHUSDT</MenuItem>
        </Select>
      </FormControl>
    </FlexBox>
  );
}
