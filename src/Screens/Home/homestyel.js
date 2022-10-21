import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  TopCon: {
    height: "12%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#B8C0FF",
  },
  textstyel: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00a6fb",
  },
  BottomCon: {
    height: "8%",

    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  Image: {
    width: 200,
    height: 150,
    borderRadius: 30,
  },
  FlatlistCon: {
    height: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
  listContent: {
    height: 100,

    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#ffddd2",
    margin: 5,
  },
  ImageCon: {
    height: "20%",

    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    padding: 20,
    backgroundColor: "#8338ec",
    borderRadius: 20,
    justifyContent: "center",
    width: "90%",
    height: 70,
  },
  ImageQues: {
    width: 70,
    height: 70,
    margin: 20,
  },
  ListText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});
export { styles };
