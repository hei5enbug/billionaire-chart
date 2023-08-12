import axios from 'axios';
import { QueryKey } from 'react-query';


export const getCandles = async ({ queryKey }: { queryKey: QueryKey }) =>
  await axios
    .get(`https://api.binance.com/api/v3/klines?symbol=${queryKey[1]}&interval=${queryKey[2]}`)
    .then((res) => res.data);
