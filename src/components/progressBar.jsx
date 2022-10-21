import { useEffect, useRef, useState } from "react";
import { View, Text, Animated } from "react-native";
const Progress = ({ step, steps, height, Remain }) => {
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;
  const [width, setwidth] = useState(0);
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <>
      <View
        style={{
          backgroundColor: "#7161ef",
          width: "100%",
          padding: 5,
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            padding: 4,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Q.No= {step}
          </Text>
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Remain = {Remain}
          </Text>
        </View>

        <View
          onLayout={(e) => {
            const newwidth = e.nativeEvent.layout.width;
            setwidth(newwidth);
          }}
          style={{
            height,
            backgroundColor: "#ffe8d6",
            borderRadius: height,
            overflow: "hidden",
          }}
        >
          <Animated.View
            style={{
              height,
              width: "100%",
              borderRadius: height,
              backgroundColor: "#ee6c4d",
              position: "absolute",
              left: 0,
              right: 0,
              transform: [
                {
                  translateX: animatedValue,
                },
              ],
            }}
          />
        </View>
      </View>
    </>
  );
};
export { Progress };
