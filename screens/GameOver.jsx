import { View, Image, Text, StyleSheet } from "react-native";
import Button from "../components/ui/Button";



function GameOverScreen({ resetGame, userInput, rounds }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleView}>
        <Text style={styles.title}>GAME OVER!</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/over.jpg")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to
        guess the number <Text style={styles.highlight}>{userInput}</Text>.
      </Text>
      <Button onPress={resetGame}>Start New Game</Button>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  titleView:{
    padding:4,
    borderBottomWidth:0.5,
    borderEndColor:'#fff',
    borderTopRightRadius:4,
    borderEndWidth:0.5,
    borderBottomColor: '#efefef',
    borderBottomEndRadius:4,
    borderBottomStartRadius:4,
  },
  title:{
    fontSize:20,
    color:'#fff'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "#fff",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    // fontFamily: "open-sans"
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
    color:'#d6dce7'
  },
  highlight: {
    // fontFamily: "open-sans-bold",
    color: "aqua",
  },
});
