import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  topCon: {
    marginTop: 50,
    padding: 40,
    backgroundColor: "#B8C0FF",
    borderBottomRightRadius: 120,
    borderBottomLeftRadius: 120,
  },

  LogoCon: {
    height: "30%",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 100,
    resizeMode: "center",
  },
  BottomCon: {
    height: "70%",
    backgroundColor: "#B8C0FF",
    borderWidth: 2,
    justifyContent: "space-evenly",
    borderTopRightRadius: 120,
    borderTopLeftRadius: 120,
    borderColor: "#B8C0FF",
  },
  TextStyel: {
    fontSize: 30,
    padding: 10,
    margin: 20,
    backgroundColor: "#9b2226",
    marginTop: 20,
    textAlign: "center",
    borderRadius: 100,
    color: "#fcf6bd",
  },
  ButtonSTyel: {
    borderRadius: 10,
    marginBottom: 200,
    backgroundColor: "#621708",
  },
  ButtonText: {
    fontSize: 20,
    padding: 15,

    fontWeight: "bold",
    textAlign: "center",

    color: "#fcf6bd",
  },
});

export { styles };
