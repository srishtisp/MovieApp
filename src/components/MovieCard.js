import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MovieCard = ({ movie, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: movie.image?.medium }} style={styles.thumbnail} />
    <View style={styles.info}>
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary} numberOfLines={3}>
        {movie.summary.replace(/<[^>]*>/g, '')}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#1c1c1c',
    borderRadius: 8,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  summary: {
    fontSize: 14,
    color: '#aaa',
  },
});

export default MovieCard;
