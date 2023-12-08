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
  brushImage: ImageStyle;
  imageLeaf: ImageStyle;
  imageArtwork: ImageStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  root: {
    flex: 1,
    backgroundColor: colors.palette.white,
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
    height: '80%',
    resizeMode: 'contain',
    top: '-5%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brushImage: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    top: -40,
    left: sizing.width > 400 ? -10 : 15,
  },
  imageLeaf: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    left: 0,
    position: 'absolute',
    top: '-27%',
  },
  imageArtwork: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    left: '1%',
    position: 'absolute',
    top: '-40%',
    zIndex: 999,
  },
});

export default styles;
