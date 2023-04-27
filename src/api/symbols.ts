import { QueryClient, dehydrate } from 'react-query';
import axios from 'axios';

export const getSymbols = async () => await axios.get('/symbol').then((res) => res.data);

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['getSymbols'], getSymbols);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
