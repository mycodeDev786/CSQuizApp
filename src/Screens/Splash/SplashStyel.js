import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  MainCon: {
    flex: 1,
  },
  LogoCon: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  TitleCon: {
    height: "8%",
    backgroundColor: "#621708",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 70,
    marginLeft: 5,
    marginRight: 5,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  image: {
    height: 200,
    width: 200,
    borderColor: "#791e94",
    borderWidth: 4,
    borderRadius: 100,
    resizeMode: "center",
  },
  BottomCon: {
    height: "45%",
    backgroundColor: "#fec89a",
    borderWidth: 2,
    justifyContent: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: "#B8C0FF",
    alignItems: "center",
    margin: 7,
  },
  Input: {
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    width: "90%",
  },

  LoginTextCon: {
    paddingBottom: 20,
    borderRadius: 30,
  },
  LoginText: {
    fontSize: 25,
    margin: 15,
    fontWeight: "bold",

    textAlign: "center",
    color: "white",
  },
  LoginTextback: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#621708",
    borderRadius: 10,
  },
  imageDr: {
    height: 300,
    width: 300,
    borderRadius: 100,
    resizeMode: "center",
  },
  TitleText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
export { styles };
