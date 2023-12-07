import {TextStyle} from 'react-native';
import {colors} from '../../utils';

const BASE: TextStyle = {
  color: colors.text,
  fontSize: 18,
  fontWeight: 'bold',
};

export const presets = {
  primary: {...BASE} as TextStyle,
  secondary: {...BASE, color: colors.subText} as TextStyle,
  third: {...BASE, color: colors.textBlack, fontWeight: 'bold'} as TextStyle,
  black: {...BASE, color: colors.textBlack, fontWeight: '400'} as TextStyle,
  disable: {...BASE, color: colors.palette.grey} as TextStyle,
};

export type TextPresets = keyof typeof presets;
