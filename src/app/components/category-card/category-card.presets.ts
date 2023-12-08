import {ViewStyle, TextStyle} from 'react-native';
import {colors, sizing} from '../../utils';

const BASE_VIEW: ViewStyle = {
  height: (sizing.width - 60) / 2,
  width: (sizing.width - 60) / 2,
  borderRadius: 12,
  marginLeft: 20,
  backgroundColor: colors.palette.white,
  borderColor: 'rgba(0,0,0,0.05)',
  borderWidth: 1.3,
};

const BASE_TEXT: TextStyle = {
  fontWeight: '500',
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
