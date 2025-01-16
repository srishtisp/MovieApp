import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

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

export default HomeScreen;
