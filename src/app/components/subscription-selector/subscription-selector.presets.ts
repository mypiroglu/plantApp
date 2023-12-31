import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors, sizing} from '../../utils';

interface SubscriptionSelectorPresets {
  container: ViewStyle;
  button: ViewStyle;
  selected: ViewStyle;
  radioButton: ViewStyle;
  selectedRadioButton: ViewStyle;
  radioButtonSelected: ViewStyle;
  buttonText: TextStyle;
  buttonSubText: TextStyle;
  saveText: TextStyle;
  saveWrapper: ViewStyle;
  linearGradient: ViewStyle;
}

export default StyleSheet.create<SubscriptionSelectorPresets>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.palette.offGreen,
    backgroundColor: colors.palette.midDarkGreen,
    marginBottom: 10,
    width: sizing.width - 40,
    height: 60,
  },
  selected: {
    borderColor: colors.palette.green,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.palette.offGreen,
  },
  selectedRadioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.palette.green,
  },
  radioButtonSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.palette.white,
  },
  buttonText: {
    color: colors.palette.white,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 18.96,
    marginLeft: 10,
  },
  buttonSubText: {
    color: colors.palette.offGreen,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.22,
    marginLeft: 10,
    marginTop: 5,
  },
  saveText: {
    color: colors.palette.white,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
  },
  saveWrapper: {
    height: 30,
    width: 77,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
    backgroundColor: colors.palette.green,
    alignSelf: 'flex-start',
    position: 'absolute',
    right: 0,
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: sizing.padding,
    borderRadius: 14,
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
