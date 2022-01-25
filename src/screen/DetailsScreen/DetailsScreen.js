import {
    FlatList,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Cast from "../../component/Cast";
import { useNavigation } from '@react-navigation/native';

const DetailsScreen = ({ route }) => {
  const { cast, description, image, pgRating, duration, title, rating ,genre,language} =
    route.params.data;
  console.log({ route });
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View>
        <ImageBackground source={image} style={styles.poster}>
          <View style={styles.navContainer}>
            <TouchableOpacity
            onPress={() => navigation.goBack()}
            >
            <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
           
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={24}
              color="white"
            />
          </View>
          <View style={styles.trailerContainer}>
            <Ionicons name="play-circle-sharp" size={50} color="white" />
            <Text style={styles.playText}>Play Trailer</Text>
          </View>
        </ImageBackground>
      </View>
    
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Ionicons name="ios-bookmark-outline" size={24} color="black" />
        </View>
        <View style={[styles.ratingContainer, styles.row]}>
          <Ionicons name="ios-star" size={24} color="#FFC319" />
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
         <View style={styles.moreDetailsContainer} >
             <View>
                 <Text style={styles.detailsTitle}>Length</Text>
                 <Text styles={styles.detailsDescription}>{duration}</Text>
             </View>
             <View>
                 <Text style={styles.detailsTitle}>Language</Text>
                 <Text styles={styles.detailsDescription}>{language}</Text>
             </View>
             <View>
                 <Text style={styles.detailsTitle}>Rating</Text>
                 <Text styles={styles.detailsDescription}>{pgRating}</Text>
             </View>
         </View>
        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{description}</Text>
            </View>
            <View style={styles.castContainer}>
            <Text style={styles.descriptionTitle}>Cast</Text>
            <Pressable style={styles.seeMoreBtn}>
            <Text style={styles.seeMore}>See More</Text>
          </Pressable>
       

            </View>
            <View>
              <FlatList
                data={cast}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Cast data={item} />}
                />
          </View>
      </View>
    </ScrollView>
     
     
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
 
    flex: 1
  },
  scrollView: {
    
  },
  poster: {
    width: wp("100%"),
    height: hp("100%"),
    resizeMode: "center",
    borderRadius: 4,
    zIndex:-1
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp("2%"),
    paddingTop: hp("5%"),
  },
  trailerContainer: {
    position: "absolute",
    width: wp("100%"),
    height: hp("35%"),
    justifyContent: "center",
    alignItems: "center",
  },
  playText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  detailsContainer: {
    paddingHorizontal: wp("2%"),
    paddingVertical: hp("1%"),
    position: "absolute",
    top: hp("35%"),
    backgroundColor: "white",
    width: wp("100%"),

    paddingBottom:200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex: 1
  },
  titleContainer: {
    paddingHorizontal: wp("2%"),
    paddingVertical: hp("1%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },ratingText:{
    fontSize: 16,
    marginLeft: 5,
    marginVertical: 5,
    color:"#9C9C9C"
  },genreContainer:{
    flexDirection: 'row',
}
,genre:{
    backgroundColor: "#DBE3FF",
    marginRight: wp('2%'),
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
},genreText:{
    fontSize: 12,
    color:"#88A4E8",
    textTransform: 'uppercase'
},moreDetailsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
    marginHorizontal: 10,
    marginRight: wp('20%'),

},detailsTitle:{
    fontSize: 16,
    color: "#9C9C9C"
},
detailsDescription:{
    fontSize: 16,
    fontWeight: "bold",
},descriptionContainer:{
    marginHorizontal: 10,

},descriptionTitle:{
    fontSize: 16,
    fontWeight: "800",
    
    marginVertical: 10,
}, descriptionText:{
    fontSize: 16,
    color: "#9C9C9C",
},castContainer:{
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},  seeMoreBtn: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "rgba(170, 169, 177, 1)",
  },
  seeMore: {
    fontSize: 12,
    color: "rgba(170, 169, 177, 1)",
  },
});
