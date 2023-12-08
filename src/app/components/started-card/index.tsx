import * as React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { colors } from '../../utils';
import { Text } from '..';
import { viewPresets, textPresets, StartedCardNames } from './started-card.presets';
import { StartedCardProps } from './started-card.props';

export const StartedCard = (props: StartedCardProps) => {
  // grab the props
  const {
    preset = 'primary',
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    imageUri,
    onPress,
    ...rest
  } = props;

  const viewStyle = viewPresets[preset];
  const viewStyles = [viewStyle, styleOverride];
  const textStyle = textPresets[preset];
  const textStyles = [textStyle, textStyleOverride];
  const isPremium = preset === 'third' ? true : false;
  const content = children || (
    <Text text={text} style={textStyles} gradient={isPremium} />
  );

  return (
    <TouchableOpacity
      style={viewStyles}
      onPress={preset !== 'disabled' ? onPress : undefined}
      {...rest}>
      <ImageBackground
        source={{ uri: imageUri }}
        style={{ width: '100%', height: '100%' }}
        borderRadius={12}
      >
        <View
          style={{
            width: '100%',
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            bottom: -95,
            borderRadius: 10,

          }}>
          {content}
        </View>
      </ImageBackground>
    </TouchableOpacity >
  );
};
