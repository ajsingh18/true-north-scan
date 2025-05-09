import React from 'react';
import { View, Text, } from 'react-native';
import LastScannedItem from '../components/last-scanned-item';


const ScannedProductScreen = ({ route }: any) => {

  return (
    <LastScannedItem
  name="Doritos Nacho Cheese"
  lastViewed={new Date()} // ← can pass actual Date now
  imageUri="https://example.com/doritos.jpg"
  onPress={() =>
    navigation.navigate('Products', {
      screen: 'ScannedProduct',
      params: { product: lastScannedProduct }
    })
  }
/>

    
  );
};

export default ScannedProductScreen;


