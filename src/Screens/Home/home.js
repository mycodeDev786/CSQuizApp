import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  InterstitialAd,
  AdEventType,
} from "react-native-google-mobile-ads";
import { Foundation } from "@expo/vector-icons";
import { styles } from "./homestyel";
import { firebase } from "../../Services/firebaseHelper";
import { useState, useEffect } from "react";
import { Loading } from "../../components/Loading";

const interstitial = InterstitialAd.createForAdRequest(
  "ca-app-pub-5621150008566854/4842287317",
  {
    requestNonPersonalizedAdsOnly: true,
  }
);

function HomeScreen({ navigation, route }) {
  const [subjects, setSubjects] = useState([]);
  const [loading, setloading] = useState(true);
  const [interstitialLoaded, setInterstitialLoaded] = useState(false);
  const email = "";

  // code for loading interstitial add

  const loadInterstitial = () => {
    const unsubscribeLoaded = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setInterstitialLoaded(true);
      }
    );

    const unsubscribeClosed = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        setInterstitialLoaded(false);
        interstitial.load();
      }
    );

    interstitial.load();

    return () => {
      unsubscribeClosed();
      unsubscribeLoaded();
    };
  };

  useEffect(() => {
    fetchSubjectsfromFirebase();
    const unsubscribeInterstitialEvents = loadInterstitial();

    return () => {
      unsubscribeInterstitialEvents();
    };
  }, [subjects]);

  const fetchSubjectsfromFirebase = () => {
    firebase
      .firestore()
      .collection("Subjects")
      .doc("SubjectList")
      .get()
      .then((res) => {
        setSubjects(res.data());
        setloading(false);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
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
            data={subjects.Subjects}
            renderItem={({ item }) => (
              <View style={styles.listContent}>
                <TouchableOpacity
                  style={styles.Button}
                  onPress={() => {
                    var Subcategory = item;
                    {
                      interstitialLoaded
                        ? interstitial.show()
                        : console.log("");
                    }

                    navigation.navigate("SubcategoryScreen", { Subcategory });
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
export { HomeScreen };
