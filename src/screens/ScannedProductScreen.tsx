import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const canadianFlag = require('../../assets/canada.png');
const usFlag = require('../../assets/usa.png');

const ScannedProductScreen = ({ route }: any) => {
  const navigation = useNavigation();
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Product Image */}
      {product.image ? (
        <Image source={require('../../assets/doritos.jpg')} style={styles.image} resizeMode="contain" />

      ) : (
        <View style={styles.placeholder}>
          <Ionicons name="image-outline" size={60} color="#aaa" />
          <Text style={styles.placeholderText}>No Image Available</Text>
        </View>
      )}

      {/* Product Name & Company */}
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.company}>{product.company}</Text>
      <Text style={styles.category}>{product.category}</Text>


      {/* Origin */}
      <View style={styles.originContainer}>
        <Text style={styles.originLabel}>Made in:</Text>
        <Image
          source={product.country === 'Canada' ? canadianFlag : usFlag}
          style={styles.flag}
        />
        <Text style={styles.country}>{product.country}</Text>
      </View>

      {/* Canadian Alternatives */}
      {product.country !== 'Canada' && product.alternatives?.length > 0 && (
        <View style={styles.alternativesContainer}>
          <Text style={styles.subTitle}>Canadian Alternatives:</Text>
          {product.alternatives.map((alt: any, index: number) => (
            <Text key={index} style={styles.altItem}>• {alt}</Text>
          ))}
        </View>
      )}

      {/* Actions */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="heart-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Add to Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="share-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ScannedProductScreen;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  placeholder: {
    width: '90%',
    height: 200,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  placeholderText: {
    color: '#888',
    marginTop: 10,
    fontSize: 16, 
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  company: {
    fontSize: 18, 
    color: '#555',
    marginTop: 4,
    marginBottom: 16,
  },
  originContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  originLabel: {
    fontSize: 18, 
    marginRight: 8,
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 6,
  },
  country: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  alternativesContainer: {
    width: '100%',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
  },
  altItem: {
    fontSize: 18,
    paddingLeft: 6,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#048BA8',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // was 16
  },
  category: {
    fontSize: 17,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 12,
  },
});

