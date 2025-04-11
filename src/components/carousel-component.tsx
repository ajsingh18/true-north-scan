import React from "react";
import { Dimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import ProductCard from "./product-card";

const screenWidth = Dimensions.get("window").width;
const ITEM_WIDTH = screenWidth * 0.8; // smaller than full width


const productData = [
  {
    image: "https://placebear.com/400/300",
    title: "Cat Food",
    rating: 4.5,
  },
  {
    image: "https://placebear.com/400/300",
    title: "Bear Toy",
    rating: 4.2,
  },
  {
    image: "https://placebear.com/400/300",
    title: "Cute Collar",
    rating: 4.9,
  },
];

export default function Index() {
  const progress = useSharedValue<number>(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Carousel
        data={productData}
        height={250}
        width={ITEM_WIDTH} // narrower than full screen
        loop
        pagingEnabled
        snapEnabled
        autoPlayInterval={2000}
        onProgressChange={progress}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 40, // change this to 40 to have a left and right peek
        }}
        style={{
          width: screenWidth,
          alignSelf: 'center',
        }}
        renderItem={({ item }) => (
          <ProductCard image={item.image} title={item.title} rating={item.rating} />
        )}
      />
    </View>
  );
}