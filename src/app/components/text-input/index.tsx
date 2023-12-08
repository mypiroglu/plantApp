import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './text-input.presets';

const SearchInput = ({ onSearch, style, ...props }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.icon}>🔍</Text>
      <TextInput
        style={styles.input}
        placeholder="Search for plants"
        placeholderTextColor="#000"
        onChangeText={onSearch}
        {...props}
      />
    </View>
  );
};
const PlainInput = props => {
  return <TextInput style={styles.input} {...props} />;
};

export { SearchInput, PlainInput };
// text input ddüzeltilecek propslar eklenecek
// get staerded conponenti eklenecek
// kategori componenti yapılacak