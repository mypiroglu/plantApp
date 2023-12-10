import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {colors, sizing} from '../../utils';

interface ButtonPresets {
  container: ViewStyle;
  containerFourth: ViewStyle;
  leftIconContainer: ViewStyle;
  iconLeft: ImageStyle;
  iconFourth: ImageStyle;
  subTextFourth: TextStyle;
  closeContainer: ViewStyle;
  contentContainer: ViewStyle;
}

export default StyleSheet.create<ButtonPresets>({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFourth: {
    flexDirection: 'column',
    paddingLeft: 40,
    paddingVertical: 25,
    width: (sizing.width - 20) * 0.5,
    height: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIconContainer: {
    backgroundColor: colors.palette.darkGreen,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 5,
    marginLeft: -10,
  },
  iconLeft: {
    width: 50,
    height: 50,
  },
  iconFourth: {
    width: 20,
    height: 20,
  },
  subTextFourth: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    height: 18,
    marginTop: 5,
  },
  closeContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.palette.darkGreen,
  },
  contentContainer: {
    flex: 1,
  },
});
