import React from 'react';
import {ImageBackground, View, SafeAreaView, FlatList} from 'react-native';
import {Text, Button, SubscriptionSelector} from '../../components';
import styles from './styles';
export const OnBoarding4 = ({navigate}) => {
  const features = [
    {
      title: 'Unlimited',
      description: 'Plant Identify',
      icon: 'scanner',
    },
    {
      title: 'Faster',
      description: 'Procces',
      icon: 'speedometer',
    },
    {
      title: 'Powerful ',
      description: 'Intelligence',
      icon: 'scan',
    },
  ];
  const renderItem = ({item}) => (
    <View style={styles.renderItemContainer}>
      <Button
        preset={'fourth'}
        text={item.title}
        iconLeft={item.icon}
        subText={item.description}
      />
    </View>
  );

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('../../../assets/images/onBoardFlower.png')}
        style={styles.image}>
        <SafeAreaView style={styles.safeAreaContainer}>
          <View style={styles.headerContainer}>
            <Button
              preset="close"
              style={styles.closeButton}
              onPress={navigate}
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.plantText}>PlantApp</Text>
              <Text style={styles.premiumText}>Premium</Text>
            </View>
            <Text style={styles.subText}>Access All Features</Text>
          </View>
          <FlatList
            style={styles.flatList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={features}
            renderItem={renderItem}
            keyExtractor={item => item.title}
          />
          <SubscriptionSelector />
          <Button
            text={'Start 3 Days Free Trial'}
            style={styles.trialButton}
            onPress={navigate}
          />
        </SafeAreaView>
      </ImageBackground>
      <Text style={styles.bottomText}>
        After the 3-day free trial period you’ll be charged ₺274.99 per year
        unless you cancel before the trial expires. Yearly Subscription is
        Auto-Renewable
      </Text>
      <Text style={styles.termsText}>Terms • Privacy • Restore</Text>
    </View>
  );
};