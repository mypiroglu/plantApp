import {
  StyleSheet,
  TextStyle,
  ViewStyle,
  Platform,
  StatusBar,
  ImageStyle,
} from 'react-native';
import {colors, sizing} from '../../utils';

interface Styles {
  container: ViewStyle;
  header: ViewStyle;
  searchContainer: ViewStyle;
  searchImage: ImageStyle;
  searchInput: ViewStyle;
  getStarted: TextStyle;
  flatList: ViewStyle;
  statusContainer: ViewStyle;
  separator: ViewStyle;
  inputContainer: ViewStyle;
  headerTextContainer: ViewStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: colors.palette.offWhite,
    paddingHorizontal: sizing.padding,
  },
  headerTextContainer: {
    flex: 1,
    marginTop: 30,
  },
  flatList: {
    flex: 1,
    backgroundColor: colors.palette.offWhite,
  },
  header: {
    marginTop: sizing.padding,
    height: sizing.headerHeight,
    paddingHorizontal: sizing.padding,
  },
  searchContainer: {
    width: sizing.width,

    paddingHorizontal: sizing.padding,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    top: -sizing.padding,
    zIndex: 999,
  },
  searchImage: {
    width: sizing.width,
    height: sizing.width / 3,
    resizeMode: 'contain',
  },
  searchInput: {
    width: '100%',
    height: 'auto',
    borderRadius: 12,
    backgroundColor: colors.palette.white,
    paddingHorizontal: sizing.padding / 2,
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
  inputContainer: {
    width: sizing.width - 2 * sizing.padding,
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.palette.white,
    paddingHorizontal: sizing.padding,
    borderColor: 'rgba(0,0,0,0.05)',
    borderWidth: 1.5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizing.padding,
  },
  statusContainer: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
    marginBottom: Platform.OS === 'ios' ? (sizing.height < 700 ? 47 : 80) : 50,
  },
});

export default styles;
