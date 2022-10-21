import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    backgroundColor: "white",
  },

  QuesCon: {
    padding: 5,
    height: 120,
    borderRadius: 20,
    backgroundColor: "#6A040F",
    alignItems: "center",
  },
  OptionCon: {
    padding: 3,
    justifyContent: "center",
  },
  ButtonsCon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 7,
  },
  Questions: {
    padding: 4,
    color: "white",
    fontSize: 14,
  },
  options: {
    padding: 10,
    paddingVertical: 10,
    marginVertical: 6,
    backgroundColor: "#FAA307",
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: "center",
  },
  optionsCorrect: {
    padding: 10,
    paddingVertical: 10,
    marginVertical: 6,
    backgroundColor: "green",
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: "center",
  },
  optionsWrong: {
    padding: 10,
    paddingVertical: 10,
    marginVertical: 6,
    backgroundColor: "red",
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: "center",
  },
  optionText: {
    fontSize: 16,
    color: "white",
  },
  Button: {
    fontSize: 20,
    textAlign: "center",
    color: "#FFD6FF",
  },
  ButtonBack: {
    padding: 14,
    width: 120,
    backgroundColor: "#9370dc",
    borderRadius: 20,
  },
  TitleCon: {
    padding: 5,
    justifyContent: "center",
  },
  titleText: {
    padding: 20,
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },
  FormCon: {
    height: "60%",
    padding: 7,
  },
  TopCon: {
    height: "8%",
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
});
export { styles };
