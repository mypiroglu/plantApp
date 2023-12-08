import React, {useEffect} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import {Button, StartedCard, CategoryCard} from '../../components';
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
    dispatch(getData());
    dispatch(getQuestions());
  }, [dispatch]);

  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <Text preset={'black'}>Hi, plant lover!</Text>
        <Text preset={'third'}>Good Afternoon! ⛅</Text>
      </View>
      <ImageBackground
        source={require('../../../assets/images/searchContainer.png')}
        imageStyle={styles.searchImage}
        style={styles.searchContainer}>
        <TextInput placeholder={'Search'} style={styles.searchInput} />
      </ImageBackground>

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

      {questionsIsLoading ? (
        <ActivityIndicator size="large" color={colors.palette.green} />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={questionsData}
          renderItem={({item}) => (
            <StartedCard
              text={item.title}
              imageUri={item.image_uri}
              onPress={() => console.log('Pressed')}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </>
  );

  const renderCategoryItem = ({item}) => (
    <CategoryCard
      text={item.title}
      imageUri={item.image.url}
      onPress={() => console.log('Pressed')}
    />
  );

  return (
    <View style={styles.container}>
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
    </View>
  );
};
