import React from 'react';
import { Text as RNText, View } from 'react-native';
import TextProps from './text.props';
import { colors, sizing } from '../../utils';
import { presets } from './text.presets';
import { textPresets } from '../button/button.presets';
import Svg, {
  LinearGradient,
  Text as Text2,
  Defs,
  Stop,
  TSpan,
} from 'react-native-svg';

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
    gradient,
    subText,
    ...rest
  } = props;
  const style = presets[preset] || presets.primary;
  const styles = [style, styleOverride, size ? { fontSize: size } : {}];
  const textColor = color || presets[preset].color || textPresets[preset].color;

  return gradient ? (
    <Svg viewBox="0 0 52 52" height="30" width={sizing.width * 0.6}>
      <Defs>
        <LinearGradient
          id="rainbow"
          x1="0"
          x2="100%"
          y1="0"
          y2="0"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={'#E5C990'} offset="0%" />
          <Stop stopColor={'#E4B046'} offset="100%" />
        </LinearGradient>
      </Defs>
      <Text2 fill="url(#rainbow)">
        <TSpan x={subText ? "-150" : "-150"} y={subText ? "25" : "40"} fontSize={subText ? 20 : 24} fontWeight={subText ? 400 : 700} >
          {text || children}
        </TSpan>
      </Text2>
    </Svg>

  ) : (
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
        allowFontScaling={false}
        {...rest}
        style={[
          { fontWeight: bold ? 'bold' : '600', color: textColor },
          ...styles,
        ]}>
        {text || children}
      </RNText>
    </View>
  );
};
