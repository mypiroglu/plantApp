import * as React from 'react';
import {ActivityIndicator, Pressable, View} from 'react-native';
import {colors} from '../../utils';
import {Text, Icon} from '..';
import {viewPresets, textPresets} from './button.presets';
import {ButtonProps} from './button.props';
import styles from './styles';

export const Button = (props: ButtonProps) => {
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
    ...(width ? [{width}] : []),
    ...(height ? [{height}] : []),
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
            preset !== 'fourth' ? styles.container : styles.containerFourth
          }>
          {iconLeft ? (
            <View style={preset === 'fourth' && styles.leftIconContainer}>
              <Icon
                icon={iconLeft}
                style={
                  preset !== 'fourth' ? styles.iconLeft : styles.iconFourth
                }
              />
            </View>
          ) : null}
          <View
            style={[
              styles.contentContainer,
              {marginLeft: preset === 'fourth' ? 10 : 0},
            ]}>
            {content}
            {subText && (
              <Text
                text={subText}
                gradient={preset !== 'fourth' ? true : false}
                style={preset !== 'fourth' ? textStyles : styles.subTextFourth}
                subText={true}
              />
            )}
          </View>
          {iconRight ? <Icon icon={iconRight} /> : null}
        </View>
      ) : (
        <View style={styles.closeContainer}>
          <Icon icon={'close'} />
        </View>
      )}
    </Pressable>
  );
};
