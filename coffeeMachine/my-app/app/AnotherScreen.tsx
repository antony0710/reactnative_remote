import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './type';
type AnotherScreenRouteProp = RouteProp<RootStackParamList, 'AnotherScreen'>;

export default function AnotherScreen() {
    const route = useRoute<AnotherScreenRouteProp>();
    const { message } = route.params;

  return (
    <View style={styles.container}>
      <Text>Another Screen</Text>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});