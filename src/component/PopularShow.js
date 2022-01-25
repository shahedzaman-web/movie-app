import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const PopularShow = ({ data }) => {
//   console.log({ data });
  const { title, image, rating, genre, time } = data;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={image} style={styles.poster} />
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <Image source={require("./../../assets/icon/Star.png")} />
                <Text style={styles.ratingText}>{rating}</Text>
            </View>
            <View style={styles.genreContainer}>
            {genre.map((item, index) => {
            return (
            <View key={index} style={styles.genre}>

                <Text style={styles.genreText}>{item}</Text>
            </View>)
          })}
            </View>
         
          <View style={[styles.row,styles.durationContainer]}>
              <Image source={require("./../../assets/icon/clock.png")} />
          <Text>{time}</Text>
              </View>
        </View>
      </View>
    </View>
  );
};

export default PopularShow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center"
  },container:{
    height: hp("25%"),
    width: wp("90%"),
    marginHorizontal:wp('2%'),
    paddingBottom:10

  },poster:{
    width: wp('25%'),
    height: hp('20%'),
    resizeMode: 'contain',
    borderRadius: 4
  },details:{
    marginLeft: wp('2%'),

  },title:{
    fontSize: 16,
    fontWeight: 'bold',
   
  },ratingText:{
    marginLeft: 5,
    fontSize: 16,
    marginVertical: 5,
    color:"#9C9C9C"
    },genreContainer:{
        flexDirection: 'row',
    }
    ,genre:{
        backgroundColor: "#DBE3FF",
        marginRight: wp('2%'),
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },genreText:{
        fontSize: 12,
        color:"#88A4E8",
        textTransform: 'uppercase'
    },durationContainer:{
        marginTop: 5,
    }


});
