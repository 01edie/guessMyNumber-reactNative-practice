import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Button from "../components/ui/Button";

function StartScreen({ startGame,setUserInput }) {
  
  const [tmpInput, setTmpInput] = useState(null)
  console.log(tmpInput)

  const startHandler =()=>{
    if(!tmpInput){
      Alert.alert('Not an empty value!',"Your phone can't beat your smartness.\n Please enter a value.",[{ text: 'Okay', style: 'destructive'}])
      setTmpInput(null)
      return
    }
    if(Number(tmpInput)===0){
      Alert.alert('Not an 0!',"please be easy with your phone",[{ text: 'Okay', style: 'destructive'}])
      setTmpInput(null)
      return
    }
    setUserInput(tmpInput)
    startGame()
  }
  return (
    <View style={styles.root}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>
          Your phone will try to guess your number{"\n"}
          let's check what happens... 😛
        </Text>
      </View>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={2}
          keyboardType="number-pad"
          value={tmpInput}
          onChangeText={setTmpInput}
        />
        <Text style={styles.helperText}>
          Don't forget to remember your number!
        </Text>
      </View>
      <View style={styles.button}>
        <Button onPress={startHandler}>Start Game</Button>
      </View>
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 100,
  },
  // container
  titleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // ..
  titleText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    // fontFamily:'sans-serif'
    textAlign: "center",
  },
  textInput: {},
  // container
  button: {
    flex: 1,
    alignItems: "center",
  },
  // ...
  // container
  textInputView: {
    flex: 1,
    alignItems: "center",
  },
  // ...
  textInput: {
    width: 100,
    height: 50,
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
    borderBottomWidth: 2,
    borderColor: "#fff",
  },
  helperText: {
    color: "#fff",
    marginTop: 4,
  },
});
