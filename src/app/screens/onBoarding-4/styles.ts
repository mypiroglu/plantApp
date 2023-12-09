import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from 'react-native';
import {colors, sizing} from '../../utils';

interface Styles {
  root: ViewStyle;
  image: ImageStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  root: {
    flex: 1,
    backgroundColor: colors.palette.white,
  },
  image: {
    width: sizing.width,
    height: sizing.height,
  },
});

export default styles;
