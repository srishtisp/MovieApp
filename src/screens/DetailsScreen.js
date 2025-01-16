import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: movie.image?.original }} style={styles.image} />
        </View>
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.summary}>{movie.summary.replace(/<[^>]+>/g, '')}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30, 
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  imageContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 650,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  summary: {
    fontSize: 16,
  },
});

export default DetailsScreen;
