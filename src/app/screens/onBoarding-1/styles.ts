import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from 'react-native';
import {colors, sizing} from '../../utils';

interface Styles {
  linearGradientContainer: ViewStyle;
  welcomeText: TextStyle;
  plantText: TextStyle;
  image: ImageStyle;
  contentContainer: ViewStyle;
  subtext: TextStyle;
  termsText: TextStyle;
  termsContainer: ViewStyle;
  button: ViewStyle;
  textContainer: ViewStyle;
  root: ViewStyle;
  safearea: ViewStyle;
  tappingTextContainer: ViewStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  root: {
    flex: 1,
    backgroundColor: colors.palette.white,
  },
  safearea: {
    flex: 1,
    backgroundColor: colors.palette.white,
  },
  linearGradientContainer: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontWeight: '300',
    fontSize: 28,
    lineHeight: 33.18,
    letterSpacing: 0.07,
  },
  plantText: {
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 33.18,
    letterSpacing: 0.07,
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtext: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: 'rgba(0, 0, 0, 0.7)',
    width: '70%',
  },
  termsText: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 18,
    color: colors.palette.offGreen,

    textAlign: 'center',
  },
  termsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: 20,
    top: sizing.height > 700 ? '3%' : '6%',
  },
  textContainer: {
    flexDirection: 'row',
  },
  tappingTextContainer: {
    top: '4%',
  },
});

export default styles;
