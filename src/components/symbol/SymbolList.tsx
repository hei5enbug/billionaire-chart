import { symbolDialogState, symbolState } from '@/recoil/symbol/atoms';
import { Box, Divider, List, ListItemButton, Typography } from '@mui/material';
import { useRecoilState } from 'recoil';

interface ISymbolListProps {
  symbols: string[];
}

export default function SymbolList({ symbols }: ISymbolListProps) {
  const [, setSymbol] = useRecoilState(symbolState);
  const [, setDialogOpen] = useRecoilState(symbolDialogState);

  const handleClick = (symbolName: string) => {
    setSymbol(symbolName);
    setDialogOpen(false);
  };

  return (
    <List sx={{ maxHeight: 'calc(100% - 50px)', overflow: 'auto', padding: 0 }}>
      {symbols.map((symbolName, index) => (
        <Box key={`symbol-list-${index}`}>
          <ListItemButton
            sx={{ padding: '0.5rem 3rem' }}
            onClick={() => {
              handleClick(symbolName);
            }}
          >
            <Typography>{symbolName}</Typography>
          </ListItemButton>
          <Divider />
        </Box>
      ))}
    </List>
  );
}
