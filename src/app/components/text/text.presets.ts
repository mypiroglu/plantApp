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
  third: {
    ...BASE,
    color: colors.textBlack,
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.35,
  } as TextStyle,
  black: {
    ...BASE,
    color: colors.textBlack,
    fontWeight: '400',
    letterSpacing: 0.07,
    lineHeight: 18.96,
  } as TextStyle,
  disable: {...BASE, color: colors.palette.grey} as TextStyle,
};

export type TextPresets = keyof typeof presets;
