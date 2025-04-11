import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // or 'react-native-vector-icons/FontAwesome'

type Props = {
  image: string;
  title: string;
  rating: number;
};

const ProductCard: React.FC<Props> = ({ image, title, rating }) => {
  // Round to nearest half for simplicity (optional)
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.ratingContainer}>
        {[...Array(fullStars)].map((_, i) => (
            <FontAwesome key={`full-${i}`} name="star" size={20} color="#FFD700" />
        ))}
        {hasHalfStar && (
            <FontAwesome name="star-half-empty" size={20} color="#FFD700" />
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
            <FontAwesome key={`empty-${i}`} name="star-o" size={20} color="#FFD700" />
        ))}
        </View>
    </View>
    </View>

  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 10,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 8,
      elevation: 4,
      flex: 1,
    },
    image: {
      width: "100%",
      height: 180,
      borderRadius: 10,
      marginBottom: 10,
      resizeMode: "cover",
    },
    infoContainer: {
      paddingHorizontal: 4,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 6,
      textAlign: "left",
    },
    ratingContainer: {
      flexDirection: "row",
      justifyContent: "flex-start",
    },
  });

export default ProductCard;
