import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../components/ui/Button";
import { useEffect, useState } from "react";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userInput, setGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userInput);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === Number(userInput)) {
      setGameOver(guessRounds.length);
      console.log(guessRounds.length);
    }
  }, [currentGuess, userInput, setGameOver]);

  console.log({ currentGuess });
  console.log({ userInput });
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function buttonHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === "low" && currentGuess < userInput) ||
      (direction === "high" && currentGuess > userInput)
    ) {
      Alert.alert("Don't lie!", "May be you forgot your number 😂", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "low") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.root}>
      <View style={styles.title}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>
            Computer will try to guess your number
          </Text>
        </View>
      </View>
      <View style={styles.mainView}>
        <View style={styles.textInputView}>
          <Text style={styles.helperText}>Your phone's guess</Text>
          <Text style={styles.guess}>{currentGuess}</Text>
          <View style={styles.buttonContainer}>
            <Button onPress={buttonHandler.bind(this, "low")}>
              <AntDesign name="minus" size={24} color="#fff" />
            </Button>
            <Button onPress={buttonHandler.bind(this, "high")}>
              <AntDesign name="plus" size={24} color="#fff" />
            </Button>
          </View>
        </View>
        <View>
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Ops! Your phone is wrong, help it by giving hints
          </Text>
        </View>
      </View>
      <View style={styles.log}>
        <View style={styles.listContainer}>
          <FlatList
            data={guessRounds}
            showsVerticalScrollIndicator={false}
            renderItem={(itemData) => (
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  #{guessRoundsListLength - itemData.index}
                </Text>
                <Text style={styles.itemText}>
                  Opponent's Guess: {itemData.item}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 50,
  },
  title: {
    flex: 1,
  },
  titleView: {
    borderWidth: 3,
    borderColor: "#fff",
    paddingVertical: 9,
    borderRadius: 4,
    marginHorizontal: 12,
  },
  titleText: {
    textAlign: "center",
    color: "#fff",
  },
  mainView: {
    flex: 2,
  },
  textInputView: {
    flex: 6,
    marginHorizontal: 2,
    // backgroundColor:'#fff',
    // opacity:0.35
    borderWidth: 2,
    borderTopStartRadius: 20,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 2,
    alignItems: "center",
  },
  helperText: {
    color: "#fff",
  },
  guess: {
    // width: 35,
    // height: 35,
    fontSize: 32,
    marginTop: 4,
    padding: 6,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center",
    // backgroundColor:'#fff',
    borderColor: "#fff",
    borderRadius: 12,
    color: "#fff",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },

  buttons: {},
  log: {
    flex: 5,
    // flex: 1,
    padding: 16,
  },
  listItem: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: "",
    flexDirection: "row",
    // justifyContent: 'space-between',
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    // fontFamily: 'open-sans'
    marginLeft: 2,
    color: "#fff",
  },
});
