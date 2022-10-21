import { useState, useRef, useEffect } from "react";
import { TouchableOpacity, View, Text, Alert } from "react-native";
import { styles } from "../QuizScreen/quizScreenStyel";
import { firebase } from "../../Services/firebaseHelper";
import { Loading } from "../../components/Loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { Progress } from "../../components/progressBar";
import { StatusBar } from "expo-status-bar";
import { Foundation } from "@expo/vector-icons";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  InterstitialAd,
  AdEventType,
} from "react-native-google-mobile-ads";

function QuizScreen({ navigation, route }) {
  const [quesno, setquesno] = useState(0);
  const [score, setscore] = useState(0);
  const [marks, setmarks] = useState(0);
  const [decider, setdecider] = useState(false);
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([{}]);
  const [Totalmarks, setTotalmarks] = useState(data.length);
  const [remainques, setremainques] = useState(data.length);
  const [totalStep, settotalStep] = useState(data.length + 1);
  const [backcolor, setbackcolor] = useState();
  const [backcolorWrong, setbackcolorWrong] = useState();
  const [explanation, setexplanation] = useState("");
  const [ExplanationShow, setExplanationShow] = useState(false);
  const { SubjectHold, SubcategorySelctor } = route.params;

  useEffect(() => {
    fetchQuestionsfromFirebase();
  }, []);

  const fetchQuestionsfromFirebase = () => {
    firebase
      .firestore()
      .collection(SubcategorySelctor.Subcategory + SubjectHold)
      .onSnapshot((querySnapshot) => {
        if (querySnapshot.empty) {
          setdecider(false);
          setloading(false);
          Alert.alert("Please Connect with internet");
        } else {
          const QuesData = [];
          querySnapshot.forEach((doc) => {
            const {
              Question,
              option1,
              option2,
              option3,
              option4,
              answer,
              Explanation,
            } = doc.data();
            QuesData.push({
              id: doc.id,
              Question,
              option1,
              option2,
              option3,
              option4,
              answer,
              Explanation,
            });
          });
          setdecider(true);
          setloading(false);
          setData(QuesData);

          setTotalmarks(QuesData.length);
          setremainques(QuesData.length - 1);
          settotalStep(QuesData.length);
        }
      });
  };

  return (
    <>
      <SafeAreaView style={styles.mainCon}>
        <StatusBar style="dark" backgroundColor="#B8C0FF" />
        <View style={styles.TopCon}>
          <Foundation name="clipboard-notes" size={24} color="#432818" />
          <Text style={styles.textstyel}> Quiz App </Text>
        </View>
        <View style={styles.TitleCon}>
          <Progress
            step={quesno + 1}
            steps={totalStep}
            height={20}
            Remain={remainques}
          />
        </View>
        <BannerAd
          unitId={"ca-app-pub-5621150008566854/5038508688"}
          size={BannerAdSize.LARGE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
        {decider == true && (
          <View style={styles.FormCon}>
            <View style={styles.QuesCon}>
              <Text style={styles.Questions}> Q.{data[quesno].Question}</Text>
            </View>
            <View style={styles.OptionCon}>
              <TouchableOpacity
                onPress={() => {
                  if (data[quesno].option1 === data[quesno].answer) {
                    console.log("right");
                    setexplanation(data[quesno].Explanation);
                    setExplanationShow(true);
                    if (backcolor != "primary1") {
                      setscore(score + 1);
                      setmarks(score + 1);
                    }
                    setbackcolor("primary1");
                  } else {
                    setexplanation(data[quesno].Explanation);
                    setExplanationShow(true);
                    setbackcolorWrong("secondry");

                    if (data[quesno].answer === data[quesno].option2) {
                      setbackcolor("primary2");
                      setbackcolorWrong("secondry");
                    } else if (data[quesno].answer === data[quesno].option3) {
                      setbackcolor("primary3");
                      setbackcolorWrong("secondry");
                    } else if (data[quesno].answer === data[quesno].option4) {
                      setbackcolor("primary4");
                      setbackcolorWrong("secondry");
                    }
                  }
                }}
                style={
                  backcolor == "primary1"
                    ? styles.optionsCorrect
                    : backcolorWrong == "secondry"
                    ? styles.optionsWrong
                    : styles.options
                }
              >
                <Text style={styles.optionText}>{data[quesno].option1}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (data[quesno].option2 === data[quesno].answer) {
                    setexplanation(data[quesno].Explanation);
                    setExplanationShow(true);

                    if (backcolor != "primary2") {
                      setscore(score + 1);
                      setmarks(score + 1);
                    }
                    setbackcolor("primary2");
                  } else {
                    setexplanation(data[quesno].Explanation);
                    setExplanationShow(true);
                    setbackcolor("secondry");

                    if (data[quesno].answer === data[quesno].option3) {
                      setbackcolor("primary3");
                      setbackcolorWrong("secondry");
                    } else if (data[quesno].answer === data[quesno].option4) {
                      setbackcolor("primary4");
                      setbackcolorWrong("secondry");
                    } else if (data[quesno].answer === data[quesno].option1) {
                      setbackcolor("primary1");
                      setbackcolorWrong("secondry");
                    }
                  }
                }}
                style={
                  backcolor == "primary2"
                    ? styles.optionsCorrect
                    : backcolorWrong == "secondry"
                    ? styles.optionsWrong
                    : styles.options
                }
              >
                <Text style={styles.optionText}>{data[quesno].option2}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (data[quesno].option3 === data[quesno].answer) {
                    setexplanation(data[quesno].Explanation);
                    setExplanationShow(true);

                    if (backcolor != "primary3") {
                      setscore(score + 1);
                      setmarks(score + 1);
                    }
                    setbackcolor("primary3");
                  } else {
                    setexplanation(data[quesno].Explanation);
                    setExplanationShow(true);
                    setbackcolor("secondry");
                    if (data[quesno].answer === data[quesno].option2) {
                      setbackcolor("primary2");
                      setbackcolorWrong("secondry");
                    } else if (data[quesno].answer === data[quesno].option4) {
                      setbackcolor("primary4");
                      setbackcolorWrong("secondry");
                    } else if (data[quesno].answer === data[quesno].option1) {
                      setbackcolor("primary1");
                      setbackcolorWrong("secondry");
                    }
                  }
                }}
                style={
                  backcolor == "primary3"
                    ? styles.optionsCorrect
                    : backcolorWrong == "secondry"
                    ? styles.optionsWrong
                    : styles.options
                }
              >
                <Text style={styles.optionText}>{data[quesno].option3}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (data[quesno].option4 === data[quesno].answer) {
                    setexplanation(data[quesno].Explanation);
                    setExplanationShow(true);
                    if (backcolor != "primary4") {
                      setscore(score + 1);
                      setmarks(score + 1);
                    }
                    setbackcolor("primary4");
                  } else {
                    setexplanation(data[quesno].Explanation);
                    setExplanationShow(true);
                    setbackcolor("secondry");
                    if (data[quesno].answer === data[quesno].option2) {
                      setbackcolor("primary2");
                      setbackcolorWrong("secondry");
                    } else if (data[quesno].answer === data[quesno].option3) {
                      setbackcolor("primary3");
                      setbackcolorWrong("secondry");
                    } else if (data[quesno].answer === data[quesno].option1) {
                      setbackcolor("primary1");
                      setbackcolorWrong("secondry");
                    }
                  }
                }}
                style={
                  backcolor == "primary4"
                    ? styles.optionsCorrect
                    : backcolorWrong == "secondry"
                    ? styles.optionsWrong
                    : styles.options
                }
              >
                <Text style={styles.optionText}>{data[quesno].option4}</Text>
              </TouchableOpacity>
            </View>
            {ExplanationShow && (
              <View
                style={{
                  backgroundColor: "green",
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Text style={{ color: "white" }}>Explanation.</Text>
                <Text style={{ color: "pink" }}>{explanation}</Text>
              </View>
            )}
          </View>
        )}

        <View style={styles.ButtonsCon}>
          <TouchableOpacity
            onPress={() => {
              if (quesno + 1 >= data.length) {
                setquesno(0);
                setremainques(data.length);
                setbackcolor("");
                setbackcolorWrong("");

                setTotalmarks(data.length);

                setexplanation("");
                setExplanationShow(false);

                navigation.replace("Result", { marks, Totalmarks });
              } else {
                setquesno(quesno + 1);
                setremainques(remainques - 1);
                setbackcolor("");
                setbackcolorWrong("");
                setexplanation("");
                setExplanationShow(false);
              }
            }}
            style={styles.ButtonBack}
          >
            <Text style={styles.Button}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ButtonBack}
            onPress={() => {
              if (quesno <= 0) {
                setquesno(0);
                setremainques(data.length);
                setbackcolor("");
                setbackcolorWrong("");
                setexplanation("");
                setExplanationShow(false);
              } else {
                setquesno(quesno - 1);
                setremainques(remainques + 1);
                setbackcolor("");
                setbackcolorWrong("");
                setexplanation("");
                setExplanationShow(false);
              }
            }}
          >
            <Text style={styles.Button}>Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading == true && <Loading />}
    </>
  );
}

export { QuizScreen };
