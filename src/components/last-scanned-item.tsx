import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { formatTimestamp } from '../utils/formatDate';

type Props = {
  name: string;
  lastViewed: string | Date; // Format: "April 11, 2025, 2:30 PM" or any string
  imageUri?: string;
  onPress?: () => void;
};

const LastScannedItem: React.FC<Props> = ({ name, lastViewed, imageUri, onPress }) => {
    const formattedTime = typeof lastViewed === 'string'
      ? lastViewed
      : formatTimestamp(lastViewed);
  
    return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.timestamp}>Last viewed: {formattedTime}</Text>
        </View>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>No Image</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: 16,
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  placeholder: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 10,
    color: '#999',
    textAlign: 'center',
  },
});

export default LastScannedItem;
