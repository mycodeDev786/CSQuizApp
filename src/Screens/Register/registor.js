import { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "./registorStyel";
import Logo from "../../../assets/Images/Sign_Up.png";
import ButtonImg from "../../../assets/Images/Button.png";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { attemptoRegisterNewUser } from "../../Services/firebaseAuthHelper";
import { Loading } from "../../components/Loading";
import { SafeAreaView } from "react-native-safe-area-context";
function Registor({ navigation }) {
  const [securePassword, setSecurePassword] = useState(true);
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  SaveData = () => {
    if (email === "" || name === "" || Password === "") {
      alert(" You cannot leave any field empty");
    } else {
      setloading(true);
      attemptoRegisterNewUser(email, name, Password);
      Alert.alert("Registered Sucessfully");
      setloading(false);
      navigation.replace("Login");
    }
  };
  const onEyePressed = () => {
    setSecurePassword(!securePassword);
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.logoCon}>
          <Image source={Logo} style={styles.Logo}></Image>
        </View>
        <View style={styles.SignUpButton}>
          <Text style={styles.SignUpText}>SignUp</Text>
        </View>
        <View style={styles.InputCon}>
          <View style={styles.InerView}>
            <MaterialIcons name="alternate-email" size={24} color="black" />
            <TextInput
              onChangeText={setemail}
              style={styles.Input}
              placeholder={"Email"}
            />
          </View>
          <View style={styles.InerView}>
            <Ionicons name="person-circle" size={24} color="black" />
            <TextInput
              onChangeText={setname}
              style={styles.Input}
              placeholder={"Full Name"}
            />
          </View>
          <View style={styles.InerView}>
            <Ionicons name="lock-closed-outline" size={24} color="black" />
            <View style={styles.EyeStyel}>
              <TextInput
                onChangeText={setPassword}
                style={styles.Input}
                placeholder={"Password"}
                secureTextEntry={securePassword}
              />
              <TouchableOpacity onPress={onEyePressed}>
                <Ionicons
                  name={securePassword ? "eye-off" : "eye"}
                  color={securePassword ? "black" : "black"}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.ForgetPass}>
            <Text style={{ fontSize: 18, color: "blue", fontWeight: "500" }}>
              Term and Conditions{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: "#621708", borderRadius: 20, margin: 10 }}
            onPress={SaveData}
          >
            <Text style={styles.ButtonStyel}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.CopyRightCon}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ fontSize: 18, color: "blue", fontWeight: "500" }}>
              Already have account SignIn
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading == true && <Loading />}
    </>
  );
}

export { Registor };
