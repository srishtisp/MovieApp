import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  
  const fetchMovies = async (query) => {
    if (query.trim() === '') return; 
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchMovies(searchTerm);
    }, 500); 

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const renderMovieCard = ({ item }) => {
    const movie = item.show;
    return (
      <TouchableOpacity
        style={styles.movieCard}
        onPress={() => navigation.navigate('Details', { movie })} 
      >
        <Image source={{ uri: movie.image?.medium }} style={styles.movieImage} />
        <View style={styles.movieDetails}>
          <Text style={styles.movieTitle}>{movie.name}</Text>
          <Text style={styles.movieSummary} numberOfLines={3}>{movie.summary}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Movies..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={movies}
        renderItem={renderMovieCard}
        keyExtractor={(item) => item.show.id.toString()}
        contentContainerStyle={styles.movieList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  movieList: {
    paddingBottom: 20,
  },
  movieCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  movieImage: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  movieDetails: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieSummary: {
    marginTop: 5,
    color: 'gray',
  },
});

export default SearchScreen;
