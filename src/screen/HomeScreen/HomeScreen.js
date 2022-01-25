import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NowShowing from "../../component/NowShowing";
import PopularShow from "../../component/PopularShow";
import nowShowingData from "../../data/nowShowingData";
import popularData from "../../data/popularData";



const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

      
      <View style={styles.topBar}>
        <Image
          source={require("./../../../assets/icon/menu.png")}
          style={styles.icon}
        />
        <Text style={styles.title}>FilmKu</Text>
        <Image
          source={require("./../../../assets/icon/notification.png")}
          style={styles.icon}
        />
      </View>
      <View style={styles.nowShowing}>
        <View style={[styles.spaceBetween, styles.m12]}>
          <Text style={styles.title}>Now Showing</Text>
          <Pressable style={styles.seeMoreBtn}>
            <Text style={styles.seeMore}>See More</Text>
          </Pressable>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          data={nowShowingData}
          renderItem={({ item }) => <NowShowing data={item} />}
        />
      </View>
      <View style={styles.nowShowing}>
        <View style={[styles.spaceBetween, styles.m12]}>
          <Text style={styles.title}>Popular</Text>
          <Pressable style={styles.seeMoreBtn}>
            <Text style={styles.seeMore}>See More</Text>
          </Pressable>
        </View>
        <View
        style={{
           
        }}>
        <FlatList
          data={popularData}
          contentContainerStyle={{
            flexGrow: 1,

            }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PopularShow data={item} />}
        />
        </View>
  
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1

  },
  topBar: {
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  icon: { width: 24, height: 24, resizeMode: "contain" },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  m12: {
    margin: 12,
  },
  seeMoreBtn: {
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
