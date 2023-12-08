import {ViewStyle, TextStyle} from 'react-native';
import {colors, sizing} from '../../utils';

const BASE_VIEW: ViewStyle = {
  height: 164,
  marginBottom: 10,
  borderRadius: 12,
  width: sizing.width * 0.6,
  marginRight: 10,
};

const BASE_TEXT: TextStyle = {
  paddingHorizontal: 15,
  fontWeight: '500',
  color: colors.palette.white,
  textAlign: 'center',
  lineHeight: 24,
};

export const viewPresets: Record<string, ViewStyle> = {
  primary: {...BASE_VIEW} as ViewStyle,
};

export const textPresets: Record<StartedCardNames, TextStyle> = {
  primary: {...BASE_TEXT} as TextStyle,
};

export type StartedCardNames = keyof typeof viewPresets;
