import {StyleSheet} from 'react-native';
import {colors, sizing} from '../../utils';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
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
  radioButtonSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.palette.white,
  },
  buttonTextWrapper: {},
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
    top: -15,
    left: sizing.height > 700 ? 55 : 0,
  },
});
