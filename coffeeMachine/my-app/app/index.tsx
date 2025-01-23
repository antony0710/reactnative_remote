import React, { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './type';
import { globalStyles } from './style';
// import { Button } from 'antd';
import { Button } from 'primereact/button';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const { width, height } = Dimensions.get('window');
  const [currentX, setcurrentX] = useState(0);
  const [currentY, setcurrentY] = useState(0);
  const movingRight = useRef(true);
  const movingDown = useRef(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const moveText = (dx: number, dy: number) => {
      Animated.sequence([
        Animated.timing(position, {
          toValue: { x: dx, y: dy },
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]).start(() => {
        let newDx = dx;
        let newDy = dy;

        if (movingRight.current) {
          if (newDx > width - 150) {
            movingRight.current = false;
            newDy = dy - 50;
          } else {
            newDx = dx + 50;
          }
        } else {
          if (newDx < 50) {
            movingRight.current = true;
            newDy = dy + 50;
          } else {
            newDx = dx - 50;
          }
        }

        if (movingDown.current) {
          if (newDy > height - 150) {
            movingDown.current = false;
            newDy = dy - 50;
          } else {
            newDy = dy + 50;
          }
        } else {
          if (newDy < 50) {
            movingDown.current = true;
            newDy = dy + 50;
          } else {
            newDy = dy - 50;
          }
        }
        // console.log(newDx, newDy);
        // console.log(width, height);
        console.log(movingRight, movingDown);
        setcurrentX(newDx);
        setcurrentY(newDy);
        moveText(newDx, newDy);
      });
    };

    moveText(50, 50);
  }, [position]);

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ShowCases')}>
      <Image
        source={{ uri: 'https://thecircleofaroma.in/cdn/shop/files/picture-steaming-cup-coffee-perfect-coffee-lovers-can-be-used-illustrate-concept-cozy-morning-caffeine-addiction-warm-beverage.jpg?v=1719467884&width=3840' }}
        style={styles.reactLogo}
        resizeMode="cover"
      />
      <Animated.View style={[position.getLayout(), styles.textContainer]}>
        <Text style={globalStyles.text}>{currentTime}</Text>
      </Animated.View>
      <Text style={globalStyles.text}>{currentX}</Text>
      <Text style={globalStyles.text}>{currentY}</Text>
      <Text style={globalStyles.text}>{width}</Text>
      <Text style={globalStyles.text}>{height}</Text>
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  textContainer: {
    position: 'absolute',
  },
});