import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const barcodeImage = require('../../assets/barcode-image.png');

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Image source={barcodeImage} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Scanner')}>
          <Text style={styles.buttonText}>Open Scanner</Text>
        </TouchableOpacity>
      </View>

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
