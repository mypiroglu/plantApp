import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {StartedCardNames} from './started-card.presets';

export interface StartedCardProps extends TouchableOpacityProps {
  text?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  imageUri?: string;
  preset?: StartedCardNames;
  children?: React.ReactNode;
}
