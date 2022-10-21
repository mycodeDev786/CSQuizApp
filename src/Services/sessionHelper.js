import AsyncStorage from "@react-native-async-storage/async-storage";

const saveUserSession = async (value) => {
  try {
    await AsyncStorage.setItem("@islogged_In", value);
  } catch (e) {}
};

export { saveUserSession };

async function removeUserSession(navigation) {
  try {
    await AsyncStorage.setItem("@islogged_In", "");
    navigation.replace("Login");
  } catch (e) {}
}
export { removeUserSession };
