import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CarouselComponent from '../components/carousel-component'; // Adjust the import path as needed

const barcodeImage = require('../../assets/barcode-image.png');

export default function HomeScreen() {
  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
      <View style={styles.barcodeContainer}>
        <Image source={barcodeImage} style={styles.barcodeImage} resizeMode="contain" />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Scanner')}>
          <Text style={styles.buttonText}>Open Scanner</Text>
        </TouchableOpacity>
      </View>

      {/* Reusable Product Carousel Component */}
      <CarouselComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  barcodeContainer: {
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  barcodeImage: {
    width: 400,
    height: 200, 
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
