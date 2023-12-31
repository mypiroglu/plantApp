import React, { useLayoutEffect, useState } from 'react';
import {
  Image as RNImage,
  ImageProps as DefaultImageProps,
  ImageURISource,
} from 'react-native';
import styles from './styles';

type ImageProps = DefaultImageProps & {
  source: ImageURISource;
};

export const AutoImage = (props: ImageProps) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (props.source?.uri) {
      RNImage.getSize(props.source.uri as any, (width, height) => {
        setImageSize({ width, height });
      });
    } else {
      setImageSize(styles.imageSize);
    }
  }, []);

  return <RNImage {...props} style={[imageSize, props.style]} />;
};
