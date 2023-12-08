import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from 'react-native';
import {colors, sizing} from '../../utils';

interface Styles {
  root: ViewStyle;
  welcomeText: TextStyle;
  plantText: TextStyle;
  image: ImageStyle;
  contentContainer: ViewStyle;
  brushImage: ImageStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  root: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.palette.white,
  },
  welcomeText: {
    fontWeight: '300',
    fontSize: 24,
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
    height: '100%',
    resizeMode: 'contain',
    top: -40,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brushImage: {
    width: 110,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    top: -75,
    left: sizing.width > 400 ? -50 : 10,
  },
});

export default styles;