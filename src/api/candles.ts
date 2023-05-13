import axios from 'axios';
import { QueryClient, dehydrate } from 'react-query';

export const getCandles = async () => await axios.get('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m').then((res) => res.data);

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['getCandles'], getCandles);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
