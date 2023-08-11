import Search from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import FlexBox from '../FlexBox';

interface ISymbolSearchProps {
  search: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SymbolSearch({ search, onChange }: ISymbolSearchProps) {
  return (
    <FlexBox sx={{ flexDirection: 'row', justifyContent: 'left', paddingLeft: '1rem' }}>
      <Search />
      <TextField
        sx={{
          width: '100%',
          '& .MuiInputBase-input': {
            paddingY: '0.5rem',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent',
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent',
            },
          },
        }}
        value={search}
        onChange={onChange}
      />
    </FlexBox>
  );
}
