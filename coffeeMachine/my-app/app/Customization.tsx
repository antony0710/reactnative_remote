// filepath: /workspaces/reactnative_remote/coffeeMachine/my-app/app/Customization.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Slider,ConfigProvider } from "antd";
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './type';
import { Button } from 'primereact/button';
import { Card } from 'antd';
import TextFloatButton from './FloatButton';
type CustomizationRouteProp = RouteProp<RootStackParamList, 'Customization'>;

const CustomConfig = [
  { id: '1', name: 'weight', scale: 'g', min: 0, max: 100, step: 1 },
  { id: '2', name: 'Water temperature', scale: '°C', min: 0, max: 100, step: 1 },
  { id: '3', name: 'weight water ratio', scale: ':', min: 0, max: 100, step: 1 },
  { id: '4', name: 'pressure', scale: 'bar', min: 0, max: 100, step: 1 },
  { id: '5', name: 'Grinding', scale: 'RPM', min: 0, max: 100, step: 1 },
];

const Customization = () => {
  const route = useRoute<CustomizationRouteProp>();
  const { ItemName, ItemPic } = route.params;
  const message = 'Customize your coffee: ' + ItemName;

  const [values, setValues] = useState(
    CustomConfig.reduce((acc, item) => {
      acc[item.id] = item.min;
      return acc;
    }, {} as { [key: string]: number })
  );

  const handleValueChange = (id: string, value: number) => {
    console.log(id, value);
    setValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  return (
    
    <View style={styles.container}>
      <View style={{ flex: 1,   marginTop:50, marginBottom: 250,
 alignItems: 'center', justifyContent: 'center' }}>
        {/* <Image source={{ uri: ItemPic }} style={{ width: 100, height: 100 }} />
        <Text>Customization Screen</Text>
        <Text>{message}</Text> */}
        <Card bordered={true} style={{ flex:1,width: 200, height: 100 }}
        cover={<img alt="example" src={ItemPic} />}>
      </Card>
      </View>
      <FlatList
        data={CustomConfig}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View>
            <Text style={styles.itemText}>{item.name}</Text>
            {item.name === 'weight water ratio' ? (
        <Text style={styles.itemText}>
          {values[item.id]}:1
        </Text>
      ) : (
        <Text style={styles.itemText}>
          {values[item.id]} {item.scale}
        </Text>
      )}</View>
      <View style={styles.sliderContainer}>
        <ConfigProvider
    theme={{
      components: {
        Slider: {
          /* here is your component tokens */
          controlSize: 10,
          trackBg: 'orange',
          railSize	: 10,
        },
      },
    }}
  >
      <Slider 
        min={item.min}
        max={item.max}
        step={item.step}
        value={values[item.id]}
        onChange={(value) => handleValueChange(item.id, value)}
      ></Slider>
      </ConfigProvider>
      </View>
          </View>
        )}
      />
      <View style = {styles.container}>
      <TextFloatButton />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flex:1,
    padding: 16,
    marginTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    // flexDirection: 'row',
  },
  itemText: {
    fontSize: 16,
  },
  sliderContainer: {
    marginTop: 0,
  },
});

export default Customization;