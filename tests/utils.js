// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { setProvider } from '../server/lib/config';

// eslint-disable-next-line import/prefer-default-export
export const setConfig = (settings) => {
  setProvider((key) => settings[key]);
};
