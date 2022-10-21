import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  SignUpButton: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  EyeStyel: {
    flex: 1,
    flexDirection: "row",
  },
  InerView: {
    flexDirection: "row",
    padding: 20,
  },
  ForgetPass: {
    alignItems: "flex-start",
    padding: 10,
    paddingRight: 10,
  },
  Input: {
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    width: "90%",
  },
  SignUpText: {
    fontSize: 30,
    color: "#99a5ff",
    paddingLeft: 20,
    fontWeight: "bold",
  },
  logoCon: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  Logo: {
    height: 300,
    width: 300,
    borderRadius: 100,
    resizeMode: "center",
  },
  InputCon: {},

  CopyRightCon: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 40,
    padding: 10,
  },
  ButtonStyel: {
    padding: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  ImageBackStyel: {
    justifyContent: "center",
    width: "100%",
  },
});

export { styles };
