import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from 'react-native';
import {colors, sizing} from '../../utils';

interface Styles {
  root: ViewStyle;
  safeAreaContainer: ViewStyle;
  image: ImageStyle;
  headerContainer: ViewStyle;
  headerTextContainer: ViewStyle;
  closeButton: ViewStyle;
  plantText: TextStyle;
  premiumText: TextStyle;
  subText: TextStyle;
  flatList: ViewStyle;
  renderItemContainer: ViewStyle;
  trialButton: ViewStyle;
  bottomText: TextStyle;
  termsText: TextStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  root: {
    flex: 1,
    backgroundColor: colors.palette.darkGreen,
  },
  safeAreaContainer: {
    flex: 1,
  },
  image: {
    width: sizing.width,
    height: '100%',
    padding: sizing.padding,
    marginTop: -50,
    paddingTop: 100,
  },
  headerContainer: {
    height: sizing.height < 700 ? sizing.height / 3.5 : sizing.height / 2.3,
    width: '100%',
  },
  headerTextContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  plantText: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.palette.white,
    lineHeight: 46.8,
    textAlign: 'center',
  },
  premiumText: {
    fontSize: 27,
    fontWeight: '300',
    color: colors.palette.white,
    lineHeight: 46.8,
    textAlign: 'center',
    marginLeft: 5,
  },
  subText: {
    fontWeight: '300',
    fontSize: 17,
    letterSpacing: 0.38,
    lineHeight: 24,
  },
  flatList: {
    marginTop: 20,
  },
  renderItemContainer: {
    marginRight: 10,
  },
  trialButton: {
    width: sizing.width - 40,
  },
  bottomText: {
    fontSize: 9,
    fontWeight: '300',
    color: colors.palette.offGreen,
    lineHeight: 11.88,
    textAlign: 'center',
    paddingHorizontal: sizing.padding,
    marginTop: -10,
  },
  termsText: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13.04,
    color: colors.palette.grey,
    textAlign: 'center',
    paddingHorizontal: sizing.padding,
    marginTop: 5,
  },
});

export default styles;
