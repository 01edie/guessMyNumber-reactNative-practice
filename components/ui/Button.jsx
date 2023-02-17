import { View, Text, StyleSheet, Pressable } from "react-native";

function Button({ children, onPress }) {
  return (
    <View style={styles.buttonViewOuter}>
      <Pressable
        android_ripple={{ color: "#5f1277" }}
        style={({pressed})=>pressed?[styles.buttonViewInner,styles.pressed]:styles.buttonViewInner}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonViewOuter: {
    borderRadius: 5,
    overflow: "hidden",
    margin:4
  },
  buttonViewInner: {
    backgroundColor: "#9d54d6",
    paddingHorizontal: 18,
    paddingVertical: 8,
    elevation: 10,
    minWidth:100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  pressed:{
    opacity:0.75,
    elevation:0
  }
});
