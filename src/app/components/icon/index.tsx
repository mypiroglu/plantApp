import * as React from 'react';
import {View, ImageStyle} from 'react-native';
import {AutoImage as Image} from '../auto-image';
import {IconProps} from './icon.props';
import {icons} from './icons';

const ROOT: ImageStyle = {
  resizeMode: 'contain',
};

export const Icon = (props: IconProps) => {
  const {style: styleOverride, icon = 'back', containerStyle} = props;

  return (
    <View style={containerStyle}>
      <Image style={[ROOT, styleOverride]} source={icons[icon]} />
    </View>
  );
};
