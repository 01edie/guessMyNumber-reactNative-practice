import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import GameOver from "./screens/GameOver";
import GameScreen from "./screens/GameScreen";
import StartScreen from "./screens/StartScreen";

export default function App() {
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(0);
  const [userInput, setUserInput] = useState(null);

  const startGame = () => {
    setGameOn(true);
  };
  const resetGame =()=>{
    setGameOn(false)
    setGameOver(0)
    setUserInput(null)
  }

 
  let Screen = (
    <StartScreen
      startGame={startGame}
      setUserInput={setUserInput}
      
    />
  );
  if (gameOn) {
    Screen = <GameScreen userInput={userInput} setGameOver={setGameOver} />;
  }
  if (gameOn && gameOver) {
    Screen = <GameOver resetGame={resetGame} userInput={userInput}  rounds={gameOver}/>;
  }

  return (
    <LinearGradient style={styles.container} colors={["blue", "red"]}>
      <ImageBackground
        style={styles.container}
        source={require("./assets/bg2.jpg")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <StatusBar
          style="auto"
          // animated={true}
          // backgroundColor="#fff"
          // hidden={true}
        />
        <SafeAreaView style={styles.container}>
          <View style={styles.containerRoot}>{Screen}</View>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
  containerRoot: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 16,
    marginBottom: 8,
  },
});
