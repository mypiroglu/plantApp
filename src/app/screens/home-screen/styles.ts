import {StyleSheet, ViewStyle} from 'react-native';
import {colors, sizing} from '../../utils';

interface Styles {
  container: ViewStyle;
}

const styles: Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: sizing.padding,
  },
});

export default styles;
