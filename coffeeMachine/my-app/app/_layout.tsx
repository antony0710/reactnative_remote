import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import HomeScreen from './index';
import AnotherScreen from './AnotherScreen';
import ShowCases from './ShowCases';
import Customization from './Customization';
import Stepper from './steps';
import { PrimeReactProvider } from 'primereact/api';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Stack = createNativeStackNavigator();
// export {default} from './.storybook'; 
const Tab = createMaterialTopTabNavigator();
function shouldShowHeader(routeName) {
  return ["ShowCases"].includes(routeName); // 只在 Home 和 Profile 显示
}
export default function RootLayout({ Component, pageProps }) {
  const colorScheme = useColorScheme();
  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
          <Stack.Navigator
          screenOptions={({ route }) => ({
            header: () => {
              if (["ShowCases" , 'Customization'].includes(route.name)) {
                return (
                  <Stepper
                  />
                );
              }
              return null; // 不显示 Header
            },
          })}
        >
        <Stack.Screen 
          name='index' 
          component={HomeScreen}
        />
        <Stack.Screen 
          name="ShowCases" 
          component={ShowCases}
        />
        <Stack.Screen 
          name="Customization"
          component={Customization}
        />
      </Stack.Navigator>
  );
}