import { Divider, List, ListItemButton, Typography } from '@mui/material';

interface ISymbolListProps {
  symbols: string[];
}

export default function SymbolList({ symbols }: ISymbolListProps) {
  return (
    <List sx={{ maxHeight: 'calc(100% - 50px)', overflow: 'auto', padding: 0 }}>
      {symbols.map((symbol, index) => (
        <>
          <ListItemButton key={`symbol-list-${index}`} sx={{ padding: '0.5rem 3rem' }}>
            <Typography>{symbol}</Typography>
          </ListItemButton>
          <Divider />
        </>
      ))}
    </List>
  );
}
