import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddProductScreen() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('Canada');
  const [alternatives, setAlternatives] = useState('');
  const [focusedInput, setFocusedInput] = useState<string | null>(null);


  const handleSubmit = () => {
    const newProduct = {
      name,
      company,
      category,
      country,
      alternatives: alternatives.split(',').map(a => a.trim()),
    };

    console.log('Submitted Product:', newProduct);
    // TODO: push to Supabase
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Add a New Product</Text>

      <TextInput
        style={[
          styles.input,
          focusedInput === 'name' && styles.inputFocused
        ]}
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
        onFocus={() => setFocusedInput('name')}
        onBlur={() => setFocusedInput(null)}
      />

      <TextInput
        style={[
          styles.input,
          focusedInput === 'company' && styles.inputFocused
        ]}
        placeholder="Company"
        value={company}
        onChangeText={setCompany}
        onFocus={() => setFocusedInput('company')}
        onBlur={() => setFocusedInput(null)}
      />

      <TextInput
        style={[
          styles.input,
          focusedInput === 'category' && styles.inputFocused
        ]}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        onFocus={() => setFocusedInput('category')}
        onBlur={() => setFocusedInput(null)}
      />

      <Text style={styles.label}>Country of Origin</Text>
      <View style={styles.countryRow}>
        <TouchableOpacity
          style={[styles.countryButton, country === 'Canada' && styles.selected]}
          onPress={() => setCountry('Canada')}
        >
          <Text style={styles.countryText}>🇨🇦 Canada</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.countryButton, country === 'USA' && styles.selected]}
          onPress={() => setCountry('USA')}
        >
          <Text style={styles.countryText}>🇺🇸 USA</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={[
          styles.input,
          focusedInput === 'alternatives' && styles.inputFocused
        ]}
        placeholder="Canadian Alternatives (comma-separated)"
        value={alternatives}
        onChangeText={setAlternatives}
        multiline
        onFocus={() => setFocusedInput('alternatives')}
        onBlur={() => setFocusedInput(null)}
      />

      {/* Placeholder image section */}
      <View style={styles.imagePlaceholder}>
        <Ionicons name="image-outline" size={40} color="#aaa" />
        <Text style={styles.imageText}>Image Upload Coming Soon</Text>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit Product</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  countryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  countryButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  selected: {
    backgroundColor: '#d0f0ff',
    borderColor: '#048BA8',
  },
  countryText: {
    fontSize: 16,
  },
  imagePlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 24,
  },
  imageText: {
    color: '#888',
    marginTop: 8,
  },
  submitButton: {
    backgroundColor: '#048BA8',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  inputFocused: {
    borderColor: '#048BA8',
    shadowColor: '#048BA8',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  
});

