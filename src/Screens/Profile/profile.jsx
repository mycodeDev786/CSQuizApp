import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { firebase } from "../../Services/firebaseHelper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { removeUserSession } from "../../Services/sessionHelper";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
function Profile({ navigation }) {
  const [users, setusers] = useState([]);
  const [image, setImage] = useState(null);
  const [userId, setuserId] = useState("");
  const [uploadButtonDecider, setuploadButtonDecider] = useState(false);
  var ImageDownloadUrl = "";
  const pickImage = async () => {
    setuploadButtonDecider(true);
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,

      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  useEffect(() => {
    fetchUseretailsfromFirebase();
  }, [uploadButtonDecider, users]);

  const UploadImage = async () => {
    setuploadButtonDecider(false);
    firebase
      .firestore()
      .collection("Users")
      .doc(userId)
      .update({
        ImageDownloadUrl,
      })
      .then((response) => {
        alert("your Image got uploaded");
      })
      .catch((error) => {
        setuploadButtonDecider(true);
      });
  };

  const SavePicture = async () => {
    const response = await fetch(image);
    const blob = await response.blob();
    firebase
      .storage()
      .ref("Images")
      .child(userId)
      .put(blob)
      .then((response) => {
        console.log("image Saved");
        firebase
          .storage()
          .ref("Images/" + userId)
          .getDownloadURL()
          .then((downloadResponce) => {
            ImageDownloadUrl = downloadResponce;
            UploadImage();
          })
          .catch((downloadError) => {
            console.log(downloadError);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const fetchUseretailsfromFirebase = () => {
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
            if (res.data().ImageDownloadUrl === undefined) {
              console.log("I");
              setuploadButtonDecider(true);
            }
          })
          .catch((error) => {});
      } else {
        // User not logged in or has just logged out.
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" backgroundColor="#B8C0FF" />
      <View style={styles.container}>
        <View style={styles.TopCon}>
          <MaterialCommunityIcons
            name="account-box-outline"
            size={35}
            color="black"
          />

          <Text style={styles.textstyel}> Profile </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              position: "absolute",
              height: 230,
              width: 230,
              backgroundColor: "white",
              top: 60,
              borderRadius: 90,
              zIndex: 1,
            }}
            onPress={pickImage}
          >
            <Image
              source={
                uploadButtonDecider === false
                  ? { uri: users.ImageDownloadUrl }
                  : { uri: image }
              }
              style={{ height: 230, width: 230, borderRadius: 90 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          paddingTop: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {uploadButtonDecider && (
          <TouchableOpacity
            style={{
              width: 120,
              padding: 10,
              backgroundColor: "#9370dc",
              borderRadius: 10,
            }}
            onPress={SavePicture}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "900",
                color: "#FFD6FF",
                textAlign: "center",
              }}
            >
              Upload
            </Text>
          </TouchableOpacity>
        )}
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 20,
            borderColor: "#B8C0FF",
            borderWidth: 10,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "900", padding: 10 }}>
              Name:
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "900", padding: 10 }}>
              {users.name}
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "900", padding: 10 }}>
              Email:
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "900", padding: 10 }}>
              {users.email}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#B8C0FF",
          borderRadius: 20,
          borderColor: "white",
          borderWidth: 10,
          width: "100%",
          marginTop: 10,
          padding: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "900", padding: 10 }}>
            Highest Marks:
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "900", padding: 10 }}>
            {users.H_marks}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "900", padding: 10 }}>
            Lowest Marks:
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "900", padding: 10 }}>
            {users.L_marks}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "900", padding: 10 }}>
            Average Marks:
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "900", padding: 10 }}>
            {users.Avg_marks}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,

          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 120,
            padding: 20,
            backgroundColor: "#9370dc",
            borderRadius: 10,
          }}
          onPress={() => {
            Alert.alert("wait", "Are You trying to logout", [
              {
                text: "cancel",
                onPress: () => console.log("cancel Pressed"),
                style: "cancel",
              },
              {
                text: "confirm",
                onPress: () => removeUserSession(navigation),
              },
            ]);
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,

              textAlign: "center",
              color: "#FFD6FF",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export { Profile };

const styles = StyleSheet.create({
  container: {
    height: "35%",
    alignItems: "center",

    backgroundColor: "#B8C0FF",
  },
  TopCon: {
    paddingTop: 8,
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#B8C0FF",
  },
  textstyel: {
    padding: 5,
    fontSize: 30,
    fontWeight: "bold",
    color: "#00a6fb",
  },
});
