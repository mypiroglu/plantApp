import {ViewStyle, TextStyle} from 'react-native';
import {colors, sizing} from '../../utils';

const BASE_VIEW: ViewStyle = {
  height: sizing.width * 0.4,
  borderRadius: 12,
  width: sizing.width * 0.4,
  marginRight: sizing.width - sizing.width * 0.8 - sizing.padding * 2,
  backgroundColor: colors.palette.white,
  borderColor: colors.palette.grey,
  borderWidth: 1,
};

const BASE_TEXT: TextStyle = {
  fontWeight: '700',
  color: colors.palette.black,
  textAlign: 'left',
  lineHeight: 24,
};

export const viewPresets: Record<string, ViewStyle> = {
  primary: {...BASE_VIEW} as ViewStyle,
};

export const textPresets: Record<StartedCardNames, TextStyle> = {
  primary: {...BASE_TEXT} as TextStyle,
};

export type StartedCardNames = keyof typeof viewPresets;
