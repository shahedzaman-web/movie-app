import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
const NowShowing = ({data}) => {
    // console.log({data});
    const navigation = useNavigation();
    const { title,image,rating,} = data;
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('DetailsScreen', {  data })}
    style={styles.container}> 
     <Image source={image}  
     style={styles.poster}
     />
        <Text style={styles.title}>{title}</Text>
        <View
            style={styles.ratings}
        >
            <Image source={require('./../../assets/icon/Star.png')} />
            <Text style={styles.ratingText}>{rating}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default NowShowing;

const styles = StyleSheet.create({
    container:{
        width: wp('38%'),
        marginHorizontal: wp('2%'),
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    ratings: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingText: {
        marginLeft: 5,
        fontSize: 12,
        color:"#9C9C9C"
    },poster:{
       
        resizeMode: 'contain',
        borderRadius: 4
    }
});
