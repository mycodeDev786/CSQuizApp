import { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Logo from "../../../assets/Images/Login_image.png";
import ButtonImg from "../../../assets/Images/Button.png";
import { Loading } from "../../components/Loading";
import { styles } from "../Login/loginStyel";
import { SafeAreaView } from "react-native-safe-area-context";
import { attemptToSignin } from "../../Services/firebaseAuthHelper";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login({ navigation }) {
  const [securePassword, setSecurePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [rememberme, setrememberme] = useState(false);
  const onEyePressed = () => {
    setSecurePassword(!securePassword);
  };

  useEffect(() => {
    async function LoadSesion() {
      try {
        value = await AsyncStorage.getItem("@islogged_In");
        if (value !== null) {
          navigation.replace("Hold");
        }
      } catch (e) {}
    }
    LoadSesion();
  }, []);
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.LogoCon}>
          <Image source={Logo} style={styles.Logo}></Image>
        </View>
        <View style={styles.LoginButton}>
          <Text style={styles.LoginText}>Login</Text>
        </View>
        <View style={styles.InputCon}>
          <View style={styles.InerView}>
            <MaterialIcons name="alternate-email" size={24} color="black" />
            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={styles.Input}
              placeholder={"Email"}
            />
          </View>
          <View style={styles.InerView}>
            <Ionicons name="lock-closed-outline" size={24} color="black" />
            <View style={styles.EyeStyel}>
              <TextInput
                onChangeText={(text) => setPassword(text)}
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: 20,
              padding: 10,
            }}
          >
            <BouncyCheckbox
              size={30}
              fillColor={"green"}
              onPress={() => {
                setrememberme(true);
              }}
            />
            <Text style={styles.ForgetPassText}>Remember me</Text>
          </View>
          <TouchableOpacity
            style={styles.LoginTouchButton}
            onPress={() => {
              if (email === undefined || Password === "") {
                Alert.alert("Enter All details");
              } else {
                setloading(true);
                attemptToSignin(email, Password, navigation, rememberme);
              }
            }}
          >
            <Text style={styles.LoginButtonStyel}>Login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.ForgetPass}
          onPress={() => {
            navigation.navigate("ForgetPassword");
          }}
        >
          <Text style={styles.ForgetPassText}>Forget Password ?</Text>
        </TouchableOpacity>
        <View style={styles.InfoCon}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Registor");
            }}
          >
            <Text style={styles.CreateButtonStyel}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading == true && <Loading />}
    </>
  );
}

export { Login };
