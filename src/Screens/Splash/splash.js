import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Logo from "../../../assets/Images/Logo.png";
import LogoBack from "../../../assets/Images/Logoback.jpg";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { styles } from "./SplashStyel";
function Splash({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#B8C0FF" }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#B8C0FF"
      />
      <View style={styles.LogoCon}>
        <Image source={Logo} style={styles.image}></Image>
      </View>
      <View style={styles.TitleCon}>
        <Text style={styles.TitleText}>Computer Science MCQs</Text>
      </View>
      <View style={styles.BottomCon}>
        <View style={styles.LoginTextCon}></View>
        <Image source={LogoBack} style={styles.imageDr} />
      </View>
      <View style={{ padding: 8 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.LoginTextback}
        >
          <Text style={styles.LoginText}> Lets Start</Text>
          <Ionicons name="caret-forward" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export { Splash };
