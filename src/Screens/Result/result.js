import { Image, View, Text, TouchableOpacity } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { styles } from "./resultstyel";
import Logo from "../../../assets/Images/Result.png";
import { firebase } from "../../Services/firebaseHelper";
import { useEffect, useState } from "react";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  InterstitialAd,
  AdEventType,
} from "react-native-google-mobile-ads";

function Result({ navigation, route }) {
  const { marks, Totalmarks } = route.params;
  const [userId, setuserId] = useState("1234");
  const [confetDecider, setconfetDecider] = useState(0);
  const [users, setusers] = useState([]);
  const [H_marks, setH_marks] = useState(0);
  const [L_marks, setL_marks] = useState(0);

  const fetchMarksFromFirebase = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        setuserId(user.uid);
        firebase
          .firestore()
          .collection("Users")
          .doc(user.uid)
          .get()
          .then((res) => {
            setusers(res.data());
            setH_marks(users.H_marks);
            setL_marks(users.L_marks);
          })
          .catch((error) => {});
      } else {
        // User not logged in or has just logged out.
      }
    });
  };

  const uplaodMarks = () => {
    if (marks > H_marks) {
      firebase
        .firestore()
        .collection("Users")
        .doc(userId)
        .update({
          H_marks: marks,
        })
        .then((response) => {
          alert("your Result got uploaded");
        })
        .catch((error) => {});
    } else {
      if (marks < L_marks) {
        console.log("low");
        firebase
          .firestore()
          .collection("Users")
          .doc(userId)
          .update({
            L_marks: marks,
          })
          .then((response) => {
            alert("your Result got uploaded");
          })
          .catch((error) => {});
      } else {
        firebase
          .firestore()
          .collection("Users")
          .doc(userId)
          .update({
            L_marks: marks,
          })
          .then((response) => {
            alert("your Result got uploaded");
          })
          .catch((error) => {});
      }
    }
  };
  useEffect(() => {
    fetchMarksFromFirebase();
    if (marks >= Totalmarks / 2) {
      setconfetDecider(200);
    }
  }, [users]);

  return (
    <View style={styles.container}>
      <View style={styles.topCon}>
        <Text style={styles.TextStyel}>Result</Text>
      </View>
      <BannerAd
        unitId={"ca-app-pub-5621150008566854/5038508688"}
        size={BannerAdSize.LARGE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
      <View style={styles.LogoCon}>
        <Image source={Logo} style={styles.image}></Image>
        <ConfettiCannon count={confetDecider} origin={{ x: -10, y: 0 }} />
      </View>

      <View style={styles.BottomCon}>
        <Text
          style={{
            backgroundColor: "#9d71e8",
            fontSize: 20,
            padding: 20,
            margin: 20,
            textAlign: "center",
            borderRadius: 10,
            color: "#fcf6bd",
            fontWeight: "bold",
          }}
        >
          Your Marks={marks}
        </Text>
        <TouchableOpacity style={styles.ButtonSTyel} onPress={uplaodMarks}>
          <Text style={styles.ButtonText}>Uplaod Your Result</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { Result };
