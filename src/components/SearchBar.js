import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch, onFocus }) => {
  const [term, setTerm] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Movies..."
        placeholderTextColor="#aaa"
        value={term}
        onChangeText={(text) => setTerm(text)}
        onSubmitEditing={() => onSearch && onSearch(term)}
        onFocus={onFocus}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#333',
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
  },
});

export default SearchBar;
