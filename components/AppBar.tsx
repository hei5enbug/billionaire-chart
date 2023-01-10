import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import FlexBox from './FlexBox';

export default function AppBar() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <FlexBox
      sx={{
        height: '3rem',
        backgroundColor: 'primary.main',
        marginBottom: 1,
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          defaultValue="10"
          onChange={handleChange}
        >
          <MenuItem value={10}>BTCUSDT</MenuItem>
          <MenuItem value={20}>ETHUSDT</MenuItem>
        </Select>
      </FormControl>
    </FlexBox>
  );
}
