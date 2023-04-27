import { Divider, List, ListItemButton, Typography } from '@mui/material';

interface ISymbolListProps {
  symbols: string[];
}

export default function SymbolList({ symbols }: ISymbolListProps) {
  return (
    <List sx={{ maxHeight: 'calc(100% - 50px)', overflow: 'auto', padding: 0 }}>
      {symbols.map((symbol, index) => (
        <>
          <ListItemButton sx={{ padding: '0.5rem 3rem' }}>
            <Typography key={`symbol-${index}`}>{symbol}</Typography>
          </ListItemButton>
          <Divider />
        </>
      ))}
    </List>
  );
}
