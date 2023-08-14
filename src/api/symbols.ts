import axios from 'axios';

export const getSymbols = async () => await axios.get('/symbol').then((res) => res.data);
