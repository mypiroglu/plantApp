import * as React from 'react';
import { ActivityIndicator, Pressable, View } from 'react-native';
import { colors, sizing } from '../../utils';
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
    <Pressable
      style={viewStyles}
      onPress={preset !== 'disabled' ? onPress : undefined}
      {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.palette.white} />
      ) : preset !== 'close' ? (
        <View
          style={
            preset !== 'fourth'
              ? {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10,
              }
              : {
                flexDirection: 'column',
                padding: 20,
                width: (sizing.width - 20) * 0.5,
                height: 140,
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }
          }>
          {iconLeft ? (
            <View
              style={
                preset === 'fourth' && {
                  backgroundColor: colors.palette.darkGreen,
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                  marginBottom: 15,
                }
              }>
              <Icon
                icon={iconLeft}
                style={
                  preset !== 'fourth'
                    ? { width: 30, height: 30 }
                    : { width: 30, height: 30 }
                }
              />
            </View>
          ) : null}
          <View
            style={{
              flex: 1,
            }}>
            {content}
            {subText && (
              <Text
                text={subText}
                gradient={preset !== 'fourth' ? true : false}
                style={
                  preset !== 'fourth'
                    ? textStyles
                    : {
                      fontSize: 13,
                      fontWeight: '400',
                      lineHeight: 18,
                      height: 18,
                      marginTop: 5,
                    }
                }
                subText={true}
              />
            )}
          </View>
          {iconRight ? <Icon icon={iconRight} /> : null}
        </View>
      ) : (
        <View
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.palette.darkGreen,
          }}>
          <Icon icon={'close'} />
        </View>
      )}
    </Pressable>
  );
};
