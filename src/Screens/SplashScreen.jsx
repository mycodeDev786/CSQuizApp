import { View, Image } from "react-native";
import SplashImage from "../../assets/SplashIm.png";
import { StatusBar } from "expo-status-bar";

function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.replace("Splash");
  }, 5000);
  return (
    <View style={{ height: "100%", backgroundColor: "#B8C0FF" }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#B8C0FF"
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#B8C0FF",
        }}
      >
        <Image style={{ width: 300, height: 300 }} source={SplashImage} />
      </View>
    </View>
  );
}
export { SplashScreen };
