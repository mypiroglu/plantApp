import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from 'react-native';
import {colors, sizing} from '../../utils';

interface Styles {
  root: ViewStyle;
  welcomeText: TextStyle;
  plantText: TextStyle;
  image: ImageStyle;
  contentContainer: ViewStyle;
  brushImage: ImageStyle;
  textContainer: ViewStyle;
  button: ViewStyle;
  dotContainer: ViewStyle;
  activeDot: ViewStyle;
  inactiveDot: ViewStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  root: {
    flex: 1,
    backgroundColor: colors.palette.white,
  },
  textContainer: {
    flexDirection: 'row',
  },
  welcomeText: {
    fontWeight: '300',
    fontSize: 24,
    lineHeight: 33.18,
    letterSpacing: 0.07,
    marginLeft: 20,
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
    left: sizing.width > 400 ? -70 : -10,
  },
  button: {
    marginBottom: 20,
    top: '-24%',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 32,
    position: 'absolute',
    bottom: sizing.height * 0.09,
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
