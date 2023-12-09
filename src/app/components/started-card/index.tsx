import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import {Text} from '..';
import {viewPresets, textPresets} from './started-card.presets';
import {StartedCardProps} from './started-card.props';
import styles from './styles';

export const StartedCard = (props: StartedCardProps) => {
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
        source={{uri: imageUri}}
        style={styles.imageBackground}
        borderRadius={12}>
        <View style={styles.contentContainer}>{content}</View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
