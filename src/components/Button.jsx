import { Text, StyleSheet } from "react-native";

function Text({ title, color }) {
  return <Text style={{ color: { color } }}>{title}</Text>;
}
export { Text };
