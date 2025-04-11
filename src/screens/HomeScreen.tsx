import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CarouselComponent from '../components/carousel-component';
import { globalStyles } from '../styles/styles';

const barcodeImage = require('../../assets/barcode-image.png');

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Barcode Section */}
      <View style={styles.barcodeContainer}>
        <Image source={barcodeImage} style={styles.barcodeImage} resizeMode="contain" />
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Scanner')}>
          <Text style={globalStyles.buttonText}>Open Scanner</Text>
        </TouchableOpacity>
      </View>

      {/* Carousel */}
      <View style={styles.section}>
        <CarouselComponent />
      </View>

      {/* View Products */}
      <View style={styles.section}>
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Products')}>
          <Text style={globalStyles.buttonText}>View Trending Products</Text>
        </TouchableOpacity>
      </View>

      {/* Add Product */}
      <View style={styles.section}>
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('AddProduct')}>
          <Text style={globalStyles.buttonText}>Want to add a product?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  barcodeContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  barcodeImage: {
    width: 400,
    height: 200,
  },
  section: {
    marginBottom: 24,
  },
});

