import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors} from '../../utils';

interface TextInputPresets {
  container: ViewStyle;
  icon: TextStyle;
  input: TextStyle;
}

const styles: TextInputPresets = StyleSheet.create<TextInputPresets>({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.palette.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: colors.palette.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: {
    fontSize: 24,
    color: colors.palette.black,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: colors.palette.black,
  },
});

export default styles;
