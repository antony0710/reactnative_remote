import React from 'react';
import { View, Text, FlatList, StyleSheet ,TouchableOpacity} from 'react-native';
import { Image } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import {globalStyles} from './style';
import { Card } from 'antd';
const { Meta } = Card;
const coffeeTypes = [
  { id: '1', name: 'Espresso' , pic_url:'https://i.pinimg.com/736x/1b/10/72/1b1072469de0acd40729cebff5d842ce.jpg' },
  { id: '2', name: 'Latte', pic_url:'https://i.pinimg.com/736x/11/b2/8a/11b28a199c65cf21ad42056f8048a5eb.jpg' },
  { id: '3', name: 'Cappuccino', pic_url:'https://i.pinimg.com/736x/47/45/89/47458951a055eeba3aea1e393d32d8ae.jpg'},
  { id: '4', name: 'Americano', pic_url:'https://i.pinimg.com/736x/e3/80/8c/e3808c432f25f6c3abf8e25e2275997d.jpg' },
  { id: '5', name: 'Mocha' , pic_url:'https://i.pinimg.com/736x/58/ab/dc/58abdc129c4b8a0cdc826c008246522f.jpg'},
  { id: '6', name: 'Macchiato' , pic_url:'https://i.pinimg.com/736x/58/ab/dc/58abdc129c4b8a0cdc826c008246522f.jpg'},
];

const ShowCases = () => {
    const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Customization' ,{ItemName: item.name , ItemPic : item.pic_url}) }>
        <Card
    hoverable
    style={{ width: 300 }}
    cover={<img alt="example" src={item.pic_url} />}
  >
    <Meta title={item.name} description="description" />
  </Card>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={coffeeTypes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#ffffff',
    width: "100%",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    alignItems: 'center',
  },
});

export default ShowCases;