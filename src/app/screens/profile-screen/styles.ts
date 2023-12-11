import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors, sizing} from '../../utils';

interface Styles {
  root: ViewStyle;
  title: TextStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  root: {
    flex: 1,
    backgroundColor: colors.palette.offWhite,
    paddingHorizontal: sizing.padding,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.palette.black,
  },
});

export default styles;
