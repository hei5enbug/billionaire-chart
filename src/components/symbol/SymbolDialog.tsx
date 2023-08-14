import { getSymbols } from '@/api/symbols';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, Divider, IconButton } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

import SymbolList from './SymbolList';
import SymbolSearch from './SymbolSearch';
import { useRecoilState } from 'recoil';
import { symbolState } from '@/recoil/symbol/atoms';

interface ISymbolDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SymbolDialog({ open, onClose }: ISymbolDialogProps) {
  const [symbol] = useRecoilState(symbolState);
  const [search, setSearch] = useState(symbol);
  const { data, isLoading } = useQuery<string[]>(['getSymbols'], getSymbols);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No Data!</div>;

  const findSymbols = data.filter((symbol) => symbol.includes(search.toUpperCase()));

  return (
    <Dialog PaperProps={{ sx: { margin: 0 } }} onClose={onClose} open={open} fullWidth>
      <DialogTitle
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: '0.5rem',
          pl: '1rem',
        }}
        typography="h6"
      >
        Symbols
        <IconButton onClick={onClose} sx={{ color: (theme) => theme.palette.grey[500] }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ height: '50vh', padding: 0, overflow: 'clip' }} dividers>
        <SymbolSearch search={search} onChange={handleChangeSearch} />
        <Divider />
        <SymbolList symbols={findSymbols} />
      </DialogContent>
    </Dialog>
  );
}
