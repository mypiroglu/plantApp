import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {CategoryCardNames} from './category-card.presets';

export interface CategoryCardProps extends TouchableOpacityProps {
  text?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  imageUri?: string;
  preset?: CategoryCardNames;
  children?: React.ReactNode;
}
