import { CameraView, CameraType, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Image } from 'react-native';
import { createClient } from '@supabase/supabase-js';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { Alert } from 'react-native';

// ✅ Replace these with your actual Supabase project credentials
const supabase = createClient('https://your-project.supabase.co', 'public-anon-key');

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<any>(null);
  const navigation = useNavigation();

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  useFocusEffect(
    useCallback(() => {
      setScanned(false);
    }, [])
  );

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function handleBarcodeScanned(result: BarcodeScanningResult) {
    if (scanned) return;
    setScanned(true);
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('Products')
        .select('*')
        .eq('sku', result.data)
        .single();

      if (error || !data) {
        Alert.alert(
          "Product Not Found",
          "Would you like to add this product?",
          [
            { text: "Cancel", onPress: () => setScanned(false) },
            {
              text: "Yes",
              onPress: () => navigation.navigate('AddProduct')
            }
          ]
        );      
      } else {
        navigation.navigate('Products', {
          screen: 'ScannedProduct',
          params: {
            product: {
              name: data.name,
              company: data.brand,
              image: data.im_url,
              country: data.country,
              alternatives: ['Hardbite Chips', 'Covered Bridge Chips'],
              category: data.category,
            },
          }
        })
      }
    } catch (err) {
      console.error('Error fetching product:', err);
      Alert.alert(
          "Something went wrong",
          "Something unexpected happened, please try again, or manually add the product.",
          [{ text: "Okay", onPress: () => setScanned(false) }]
        );
    }

    setLoading(false);
  }

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      <CameraView
        style={styles.camera}
        facing={facing}
        barcodeScannerSettings={{
          barcodeTypes: ['qr', 'ean13', 'ean8', 'upc_a', 'upc_e', 'code39', 'code128'],
        }}
        onBarcodeScanned={handleBarcodeScanned}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  message: { textAlign: 'center', paddingBottom: 10 },
  camera: { flex: 1 },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  productCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  productSubtitle: {
    fontSize: 18,
    marginTop: 8,
  },
});
