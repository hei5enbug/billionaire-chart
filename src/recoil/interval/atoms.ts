import { atom } from 'recoil';

export const intervalState = atom({
  key: 'interval',
  default: '15m',
});
