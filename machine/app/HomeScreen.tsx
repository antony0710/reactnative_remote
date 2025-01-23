import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <view style={styles.container}>
      <Image
        source={{ uri: 'https://thecircleofaroma.in/cdn/shop/files/picture-steaming-cup-coffee-perfect-coffee-lovers-can-be-used-illustrate-concept-cozy-morning-caffeine-addiction-warm-beverage.jpg?v=1719467884&width=3840' }}
        style={styles.photo}
      />
      <Text style={styles.text}>Home</Text>
    </view>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    top: 50,
    fontSize: 24,
    color: 'white',
    zIndex: 1,
  },
  photo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});