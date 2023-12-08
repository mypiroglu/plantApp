import {ViewStyle, TextStyle} from 'react-native';
import {colors, sizing} from '../../utils';

const BASE_VIEW: ViewStyle = {
  height: 64,
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.palette.green,
  width: sizing.width * 0.8,
};

const BASE_TEXT: TextStyle = {
  paddingHorizontal: 15,
  fontWeight: '700',
  color: colors.palette.white,
  textAlign: 'center',
  lineHeight: 24,
};

export const viewPresets: Record<string, ViewStyle> = {
  primary: {...BASE_VIEW} as ViewStyle,
  secondary: {...BASE_VIEW, backgroundColor: colors.transparent} as ViewStyle,
  third: {
    ...BASE_VIEW,
    backgroundColor: colors.premiumBrown,
    width: sizing.width - sizing.width * 2,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  disabled: {...BASE_VIEW, backgroundColor: colors.palette.grey} as ViewStyle,
};

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: {...BASE_TEXT} as TextStyle,
  secondary: {...BASE_TEXT, color: colors.palette.black} as TextStyle,
  third: {...BASE_TEXT, fontWeight: '700'} as TextStyle,
  disabled: {...BASE_TEXT, color: colors.palette.white} as TextStyle,
};

export type ButtonPresetNames = keyof typeof viewPresets;
