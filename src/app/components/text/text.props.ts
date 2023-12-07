import {StyleProp, TextProps as TextProperties, TextStyle} from 'react-native';
import {TextPresets} from './text.presets';

interface TextProps extends TextProperties {
  children?: React.ReactNode;
  text?: string;
  color?: string;
  size?: number;
  bold?: boolean;
  style?: StyleProp<TextStyle>;
  preset?: TextPresets;
  underline?: boolean;
}

export default TextProps;
