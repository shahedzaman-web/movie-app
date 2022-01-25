import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Cast = ({data}) => {
    const {image}=data
    console.log({data});
  return (
    <View style={styles.container}>
      <Image 
      style={styles.image}
      source={image}  />
      <Text style={styles.title}>{data.name}</Text>
    </View>
  );
};

export default Cast;

const styles = StyleSheet.create({
  container:{
    paddingBottom:10,
    width: wp("22%"),
    height:hp("20%")
  },image:{
    width: wp("15%"),
    height:hp("10%"),
    resizeMode: "contain"

  }
});
