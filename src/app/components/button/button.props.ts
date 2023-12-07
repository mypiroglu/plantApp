import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {ButtonPresetNames} from './button.presets';
import {IconTypes} from '../icon/icons';

export interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  subText?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  preset?: ButtonPresetNames;
  children?: React.ReactNode;
  iconLeft?: IconTypes;
  iconRight?: IconTypes;
  height?: number;
  width?: number;
  textSize?: number;
  loading?: boolean;
}
