import React from "react";
import { Dimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

const screenWidth = Dimensions.get("window").width;
const ITEM_WIDTH = screenWidth * 0.8; // smaller than full width

const defaultDataWith6Colors = [
  "#B0604D",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

const renderItem = ({ rounded = false }: { rounded?: boolean }) => 
  ({ item }: { item: string }) => (
    <View
      style={{
        flex: 1,
        backgroundColor: item,
        borderRadius: rounded ? 20 : 0,
        marginHorizontal: 10, // add spacing around items
      }}
    />
  );

export default function Index() {
  const progress = useSharedValue<number>(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Carousel
        data={defaultDataWith6Colors}
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
        renderItem={renderItem({ rounded: true })}
      />
    </View>
  );
}