import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainCon: {
    backgroundColor: "white",
  },
  LoginButton: {
    justifyContent: "flex-end",
    paddingBottom: 5,
  },
  Logo: {
    height: 300,
    width: 300,
    borderRadius: 100,
    resizeMode: "center",
  },
  LogoCon: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  InfoCon: {
    justifyContent: "center",
    alignItems: "center",
  },
  LoginText: {
    fontSize: 30,
    paddingLeft: 20,
    color: "#99a5ff",
    fontWeight: "bold",
  },
  Input: {
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    width: "90%",
  },
  InerView: {
    flexDirection: "row",
    padding: 20,
  },
  LoginButtonStyel: {
    width: "100%",
    padding: 20,
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  ForgetPass: {
    alignItems: "flex-end",
    padding: 10,

    paddingRight: 10,
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
  ForgetPassText: {
    color: "blue",
    fontSize: 16,
  },
  EyeStyel: {
    flex: 1,
    flexDirection: "row",
  },
  CreateButtonStyel: {
    padding: 10,
    color: "blue",
    fontSize: 16,
  },
});
export { styles };
