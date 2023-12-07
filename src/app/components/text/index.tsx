import React from 'react';
import {Text as RNText, View} from 'react-native';
import TextProps from './text.props';
import {colors} from '../../utils';
import {presets} from './text.presets';

export const Text = (props: TextProps) => {
  const {
    preset = 'primary',
    text,
    color,
    bold,
    children,
    size,
    underline,
    style: styleOverride,
    ...rest
  } = props;
  const style = presets[preset] || presets.primary;
  const styles = [style, styleOverride, size ? {fontSize: size} : {}];

  return (
    <View
      style={
        underline && {
          borderBottomColor: colors.palette.offGreen,
          borderBottomWidth: 1.5,
          paddingBottom: 1,
          marginBottom: 5,
        }
      }>
      <RNText
        {...rest}
        style={[styles, {fontWeight: bold ? 'bold' : '600', color: color}]}>
        {text || children}
      </RNText>
    </View>
  );
};
