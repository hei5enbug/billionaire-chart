import { atom } from 'recoil';

export const symbolState = atom({
  key: 'symbol',
  default: 'BTCUSDT',
});

export const symbolDialogState = atom({
  key: 'open',
  default: false,
});
