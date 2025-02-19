import React from "react";
import { View, Text, Button } from "react-native";
import { collection, addDoc } from "firebase/firestore"; 
import  {addData} from "./firebaseConfig";

export default function Todo() {
  return (
    <View>
      <Text>My App</Text>
      <Button title="Click me" onPress={addData} />
    </View>
  );
}