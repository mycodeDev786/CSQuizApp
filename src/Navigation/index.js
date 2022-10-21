import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ForgetPassword } from "../Screens/ForgetPassword/forgetPassword";
import { Login } from "../Screens/Login/login";
import { Registor } from "../Screens/Register/registor";
import { Splash } from "../Screens/Splash/splash";
import { QuizScreen } from "../Screens/QuizScreen/quizScreen";
import { HomeScreen } from "../Screens/Home/home";
import { Result } from "../Screens/Result/result";
import { SubcategoryScreen } from "../Screens/SubcatgeryScreen/subcatgeryScreen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile } from "../Screens/Profile/profile";
import { SplashScreen } from "../Screens/SplashScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "lightgray",
        tabBarActiveBackgroundColor: "#B8C0FF",
        tabBarInactiveBackgroundColor: "#B8C0FF",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Nav}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={20}
              color={focused ? "blue" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={20}
              color={focused ? "blue" : "grey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MainNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registor"
          component={Registor}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Hold"
          component={HomeNav}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export { MainNav };

const Nav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SubcategoryScreen"
        component={SubcategoryScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { Nav };
