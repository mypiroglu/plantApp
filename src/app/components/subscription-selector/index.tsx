import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {SubscriptionButtonProps} from './subsription-selector.prop';
import LinearGradient from 'react-native-linear-gradient';
import styles from './subscription-selector.presets';
type SubscriptionOption = 'monthly' | 'yearly';

const SubscriptionButton: React.FC<SubscriptionButtonProps> = ({
  option,
  isSelected,
  onSelect,
}) => {
  return (
    <Pressable
      style={[styles.button, isSelected ? styles.selected : null]}
      onPress={() => onSelect(option)}
      activeOpacity={0.8}>
      <LinearGradient
        colors={
          isSelected
            ? ['#0b1e16', '#0a271b', '#1d4938']
            : ['#263b33', '#263b33']
        }
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}>
        <View
          style={isSelected ? styles.selectedRadioButton : styles.radioButton}>
          {isSelected && <View style={styles.radioButtonSelected} />}
        </View>
        <View>
          <Text style={styles.buttonText}>
            {option === 'monthly' ? '1 Month' : '1 Year'}
          </Text>
          <Text style={styles.buttonSubText}>
            {option === 'monthly'
              ? '$2.99/month, auto renewable'
              : 'First 3 days free, then $529.99/year'}
          </Text>
        </View>
        {option === 'yearly' && (
          <View style={styles.saveWrapper}>
            <Text style={styles.saveText}>Save 50%</Text>
          </View>
        )}
      </LinearGradient>
    </Pressable>
  );
};

export const SubscriptionSelector: React.FC = () => {
  const [selectedOption, setSelectedOption] =
    useState<SubscriptionOption>('yearly');
  return (
    <View style={styles.container}>
      <SubscriptionButton
        option="monthly"
        isSelected={selectedOption === 'monthly'}
        onSelect={() => setSelectedOption('monthly')}
      />
      <SubscriptionButton
        option="yearly"
        isSelected={selectedOption === 'yearly'}
        onSelect={() => setSelectedOption('yearly')}
      />
    </View>
  );
};
