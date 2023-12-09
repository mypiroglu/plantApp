import {StyleSheet, ImageStyle, ViewStyle} from 'react-native';

interface CategoryCardStyles {
  imageBackground: ImageStyle;
  contentContainer: ViewStyle;
}

export default StyleSheet.create<CategoryCardStyles>({
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
});
