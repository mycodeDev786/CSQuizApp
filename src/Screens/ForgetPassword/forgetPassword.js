import { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Logo from "../../../assets/Images/Forget_password.png";
import { forgotPassword } from "../../Services/firebaseAuthHelper";
import { MaterialIcons } from "@expo/vector-icons";

function ForgetPassword({ navigation }) {
  const [email, setemail] = useState("");

  return (
    <View style={styles.mainCon}>
      <View style={styles.logoCon}>
        <Image source={Logo} style={styles.Logo}></Image>
      </View>
      <View style={styles.ButtonStyel}>
        <Text style={styles.TextStyel}>Forget Password</Text>
      </View>
      <View style={styles.InputCon}>
        <View style={styles.InerView}>
          <MaterialIcons name="alternate-email" size={24} color="black" />
          <TextInput
            style={styles.Input}
            placeholder={"Email"}
            onChangeText={(text) => setemail(text)}
          />
        </View>

        <TouchableOpacity
          style={styles.LoginTouchButton}
          onPress={() => {
            forgotPassword(email, navigation);
          }}
        >
          <Text style={styles.ButtonStyel}>Confirm</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
}

export { ForgetPassword };

const styles = StyleSheet.create({
  mainCon: {
    flex: 4,
    backgroundColor: "white",
  },
  logoCon: {
    flex: 1,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  Logo: {
    height: 300,
    width: 300,
    borderRadius: 100,
    resizeMode: "center",
  },
  InputCon: {
    flex: 1,
  },
  ButtonStyel: {
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    padding: 20,
  },
  TextStyel: {
    fontSize: 30,
    color: "#99a5ff",
    paddingLeft: 20,
    fontWeight: "bold",
  },
  InerView: {
    flexDirection: "row",
    padding: 20,
  },
  Input: {
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    width: "90%",
  },
  EyeStyel: {
    flex: 1,
    flexDirection: "row",
  },
  ImageBackStyel: {
    justifyContent: "center",
    width: "100%",
  },
  LoginTouchButton: {
    alignItems: "center",
    backgroundColor: "#621708",
    borderRadius: 20,
    margin: 10,
  },
});
