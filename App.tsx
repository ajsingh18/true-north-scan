import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@env";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function App() {
  const [message, setMessage] = useState("Checking Supabase...");

  useEffect(() => {
    const checkConnection = async () => {
      const { data, error } = await supabase.from("test_users").select("*").limit(1);

      if (error) {
        setMessage("Supabase connection failed: " + error.message);
      } else {
        setMessage("Connected to Supabase! 🎉");
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
