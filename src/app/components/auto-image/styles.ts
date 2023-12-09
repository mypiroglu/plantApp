import {StyleSheet} from 'react-native';

interface ImageSize {
  width: number;
  height: number;
}

export default StyleSheet.create<ImageSize>({
  imageSize: {
    width: 25,
    height: 25,
  },
});
