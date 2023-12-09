import React from "react";
import { Image, View, SafeAreaView } from "react-native";
import { Text, Button } from "../../components";
import styles from "./styles";
import { sizing } from "../../utils";
export const OnBoarding3 = ({ navigate }) => {

  return (
    <SafeAreaView style={styles.root}>
      <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
        <Text style={styles.welcomeText} preset="black">
          Get plant
          {" "}
        </Text>
        <Text style={styles.plantText} preset="black">
          care guides
        </Text>
      </View>
      <Image
        source={require("../../../assets/images/Brush.png")}
        style={styles.brushImage}
        resizeMode="contain"
      />
      <View style={styles.contentContainer}>
        <Image
          source={require("../../../assets/images/backgroundLeaf.png")}
          style={styles.imageLeaf}
          resizeMode="contain"
        />
        <Image
          source={require("../../../assets/images/artwork.png")}
          style={styles.imageArtwork}
          resizeMode="contain"
        />
        <Image
          source={require("../../../assets/images/flatPhone.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Button text="Continue" style={{ marginBottom: 20, top: "-13%" }} onPress={navigate} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 32,
            position: 'absolute',
            bottom: sizing.height * 0.11,
          }}>
          <View
            style={{
              width: 6,
              height: 6,
              backgroundColor: "gray",
              borderRadius: 3,
            }}
          />
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "black",
              borderRadius: 4,
            }}
          />
          <View
            style={{
              width: 6,
              height: 6,
              backgroundColor: "gray",
              borderRadius: 3,
            }}
          />
        </View>
      </View>
    </SafeAreaView >
  );
};
