import { useQuery } from 'react-query';
import FlexBox from './FlexBox';
import { getSymbols } from '@/api/symbols';
import { Typography } from '@mui/material';

export default function SymbolList() {
  const { data, isLoading } = useQuery<string[]>(['getSymbols'], getSymbols);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No Data!</div>;

  return (
    <FlexBox sx={{ overflow: 'scroll' }}>
      {data.map((symbol, index) => (<Typography key={index}>{symbol}</Typography>))}
    </FlexBox>
  );
}
