import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Foundation } from "@expo/vector-icons";
import { styles } from "../Home/homestyel";
import { firebase } from "../../Services/firebaseHelper";
import { Loading } from "../../components/Loading";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
  InterstitialAd,
  AdEventType,
} from "react-native-google-mobile-ads";
function SubcategoryScreen({ navigation, route }) {
  const [subjects, setSubjects] = useState([]);
  const [loading, setloading] = useState(true);

  const [datadecider, setdatadecider] = useState("");
  const SubcategorySelctor = route.params;

  useEffect(() => {
    fetchSubjectsfromFirebase();
  }, [subjects]);

  const fetchSubjectsfromFirebase = () => {
    firebase
      .firestore()
      .collection("Subjects")
      .doc(SubcategorySelctor.Subcategory)
      .get()
      .then((res) => {
        setSubjects(res.data());
        if (res === null) {
          setdatadecider([]);
          setloading(false);
        } else {
          setdatadecider(subjects.NoofTests);
          setloading(false);
        }
      })
      .catch((error) => {});
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.TopCon}>
          <Foundation name="clipboard-notes" size={24} color="#432818" />
          <Text style={styles.textstyel}> Quiz App </Text>
        </View>
        <BannerAd
          unitId={"ca-app-pub-5621150008566854/5038508688"}
          size={BannerAdSize.LARGE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />

        <View style={styles.FlatlistCon}>
          <FlatList
            //  data={subjects.NoofTests}
            data={datadecider}
            renderItem={({ item }) => (
              <View style={styles.listContent}>
                <TouchableOpacity
                  style={styles.Button}
                  onPress={() => {
                    var SubjectHold = item;

                    navigation.navigate("QuizScreen", {
                      SubjectHold,
                      SubcategorySelctor,
                    });
                  }}
                >
                  <Text style={styles.ListText}>{item}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={styles.BottomCon}></View>
      </SafeAreaView>

      {loading == true && <Loading />}
    </>
  );
}
export { SubcategoryScreen };
