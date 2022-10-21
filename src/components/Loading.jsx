import { StyleSheet, View, ActivityIndicator } from "react-native";
import LottieView from "lottie-react-native";

function Loading() {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={require("../../assets/Data/myloading.json")}
        autoPlay
        loop
      />
    </View>
  );
}
export { Loading };
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 30,
    position: "absolute",
  },
});
