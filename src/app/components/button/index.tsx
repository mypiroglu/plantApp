import * as React from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { colors } from '../../utils';
import { Text, Icon } from '..';
import { viewPresets, textPresets } from './button.presets';
import { ButtonProps } from './button.props';

export const Button = (props: ButtonProps) => {
  // grab the props
  const {
    preset = 'primary',
    text,
    height,
    width,
    textSize,
    style: styleOverride,
    textStyle: textStyleOverride,
    iconLeft,
    iconRight,
    children,
    loading,
    subText,
    onPress,
    ...rest
  } = props;

  const viewStyle = viewPresets[preset];
  const viewStyles = [
    viewStyle,
    styleOverride,
    ...(width ? [{ width }] : []),
    ...(height ? [{ height }] : []),
  ];
  const textStyle = textPresets[preset];
  const textStyles = [textStyle, textStyleOverride];
  const isPremium = preset === 'third' ? true : false;
  const content = children || (
    <Text text={text} style={textStyles} size={textSize} gradient={isPremium} />
  );

  return (
    <TouchableOpacity
      style={viewStyles}
      onPress={preset !== 'disabled' ? onPress : undefined}
      {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.palette.white} />
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          {iconLeft ?
            <Icon icon={iconLeft} style={{ width: 40, height: 40 }} />
            : null}
          <View style={{ flex: 1 }}>
            {content}
            {subText && (
              <Text
                text={subText}
                gradient={true}
                style={textStyles}
                subText={true}
              />
            )}
          </View>
          {iconRight ? <Icon icon={iconRight} /> : null}
        </View>
      )}
    </TouchableOpacity>
  );
};
