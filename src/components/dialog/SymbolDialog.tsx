import { getSymbols } from '@/api/symbols';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

import SymbolList from './SymbolList';
import SymbolSearch from './SymbolSearch';

interface ISymbolDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SymbolDialog({ open, onClose }: ISymbolDialogProps) {
  const [search, setSearch] = useState('BTCUSDT');
  const { data, isLoading } = useQuery<string[]>(['getSymbols'], getSymbols);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No Data!</div>;
  const symbols = data.filter((symbol) => symbol.includes(search));

  return (
    <Dialog PaperProps={{ sx: { margin: 0 } }} onClose={onClose} open={open} fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', p: '0.5rem', pl: '1rem' }}>
        <Typography variant="h6" sx={{ width: '100%' }}>
          Symbols
        </Typography>

        <IconButton onClick={onClose} sx={{ color: (theme) => theme.palette.grey[500] }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ height: '50vh', padding: 0, overflow: 'clip' }} dividers>
        <SymbolSearch search={search} onChange={handleChangeSearch} />
        <Divider />
        <SymbolList symbols={symbols} />
      </DialogContent>
    </Dialog>
  );
}
