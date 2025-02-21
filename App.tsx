import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from "react";
import { supabase } from './utils/supabase';
import React from 'react';


export default function App() {
  const [message, setMessage] = useState("Checking Supabase...");

  useEffect(() => {
    const checkConnection = async () => {
      const { data, error } = await supabase.from("canadian_company").select("*");

      if (error) {
        setMessage("Supabase connection failed: " + error.message);
      } else {
        setMessage(data[0].company_name);
      }
    };

    checkConnection();
  }, []);

  return (
    <View style={styles.container}>
    <Text>{message}</Text> 
    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
