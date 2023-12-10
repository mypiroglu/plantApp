import React, {useEffect} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Button, StartedCard, CategoryCard, Text, Icon} from '../../components';
import {colors} from '../../utils';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getData, getQuestions} from '../../api';

interface RootState {
  categories: {
    isLoading: boolean;
    data: any;
  };
  questions: {
    isLoading: boolean;
    data: any;
  };
}

export const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const categoriesData = useSelector(
    (state: RootState) => state.categories.data?.data,
  );
  const categoriesIsLoading = useSelector(
    (state: RootState) => state.categories.isLoading,
  );
  const questionsData = useSelector((state: RootState) => state.questions.data);
  const questionsIsLoading = useSelector(
    (state: RootState) => state.questions.isLoading,
  );

  useEffect(() => {
    !categoriesData && dispatch(getData());
    !questionsData && dispatch(getQuestions());
  }, [dispatch]);

  const renderHeader = () => (
    <View style={{flex: 1, marginTop: 20}}>
      <View style={styles.header}>
        <Text preset={'black'}>Hi, plant lover!</Text>
        <Text preset={'third'}>Good Afternoon! ⛅</Text>
      </View>

      <ImageBackground
        source={require('../../../assets/images/searchContainer.png')}
        imageStyle={styles.searchImage}
        style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Icon icon={'search'} />
          <TextInput
            p
            placeholder={'Search for plants!'}
            style={styles.searchInput}
          />
        </View>
      </ImageBackground>

      <View style={styles.container}>
        <Button
          text="FREE Premium Available"
          subText="Tap to upgrade your account!"
          onPress={() => dispatch(getData())}
          iconLeft={'mail'}
          preset={'third'}
          iconRight={'arrow'}
        />
        <Text preset={'third'} bold={true} size={18} style={styles.getStarted}>
          Get Started
        </Text>
      </View>

      {questionsIsLoading ? (
        <ActivityIndicator size="large" color={colors.palette.green} />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={questionsData}
          renderItem={({item}) => (
            <View style={styles.container}>
              <StartedCard
                text={item.title}
                imageUri={item.image_uri}
                onPress={() => console.log('Pressed')}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );

  const renderCategoryItem = ({item}) => (
    <CategoryCard
      text={item.title}
      imageUri={item.image.url}
      onPress={() => console.log('Pressed')}
    />
  );
  StatusBar.setBarStyle('dark-content', true);
  return (
    <SafeAreaView style={styles.statusContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        ListHeaderComponent={renderHeader}
        data={categoriesIsLoading ? [] : categoriesData}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};
