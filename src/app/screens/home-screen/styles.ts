import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors, sizing} from '../../utils';

interface Styles {
  container: ViewStyle;
  header: ViewStyle;
  searchContainer: ViewStyle;
  searchImage: ViewStyle;
  searchInput: ViewStyle;
  getStarted: TextStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: colors.palette.offWhite,
    paddingHorizontal: sizing.padding,
  },
  header: {
    marginTop: sizing.padding,
    height: sizing.headerHeight,
    justifyContent: 'space-around',
  },
  searchContainer: {
    width: sizing.width,
    marginLeft: -sizing.padding,
    paddingHorizontal: sizing.padding,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    top: -sizing.padding,
  },
  searchImage: {
    width: sizing.width,
    height: sizing.width / 3,
    resizeMode: 'contain',
  },
  searchInput: {
    width: sizing.width - 2 * sizing.padding,
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.palette.white,
    paddingHorizontal: sizing.padding,
    borderColor: colors.palette.grey,
    borderWidth: 1,
    alignSelf: 'center',
  },
  getStarted: {
    fonstSize: 16,
    fontWeight: 'bold',
    color: colors.textBlack,
    marginVertical: sizing.padding,
  },
  separator: {
    height: 20,
    width: '100%',
    backgroundColor: colors.transparent,
  },
});

export default styles;
