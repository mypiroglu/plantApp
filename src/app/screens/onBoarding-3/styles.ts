import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from 'react-native';
import {colors, sizing} from '../../utils';

interface StylesPreset {
  root: ViewStyle;
  textContainer: ViewStyle;
  welcomeText: TextStyle;
  plantText: TextStyle;
  image: ImageStyle;
  contentContainer: ViewStyle;
  brushImage: ImageStyle;
  imageLeaf: ImageStyle;
  imageArtwork: ImageStyle;
  button: ViewStyle;
  dotContainer: ViewStyle;
  activeDot: ViewStyle;
  inactiveDot: ViewStyle;
}

const styles: StylesPreset = StyleSheet.create<StylesPreset>({
  root: {
    flex: 1,
    backgroundColor: colors.palette.white,
  },
  textContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
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
  button: {
    marginBottom: 20,
    top: '-13%',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 32,
    position: 'absolute',
    bottom: sizing.height * 0.11,
  },
  activeDot: {
    width: 8,
    height: 8,
    backgroundColor: colors.palette.black,
    borderRadius: 4,
  },
  inactiveDot: {
    width: 6,
    height: 6,
    backgroundColor: colors.palette.grey,
    borderRadius: 3,
  },
});

export default styles;
