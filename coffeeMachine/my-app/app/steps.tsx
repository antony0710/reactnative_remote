import React, { useEffect, useState } from 'react';
import { Divider, Steps } from 'antd';
import { useNavigation,NavigationProp,useRoute } from '@react-navigation/native';
import { RootStackParamList} from './type';


const Stepper = () => {
  const [current, setCurrent] = useState(0);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const onChange = (value: number) => {
    if(value < current) {
      setCurrent(value);
      switch (value) {
        case 0:
          navigation.navigate('index');
          break;
        case 1:
          navigation.navigate('ShowCases');
          break;
      }
    }
  };
  const route = useRoute();

  const description = 'This is a description.';

  useEffect(() => {
    switch (route.name) {
      case 'index':
        setCurrent(0);
        break;
      case 'ShowCases':
        setCurrent(1);
        break;
      case 'Customization':
        setCurrent(2);
        break;

    }
  }, [route.name]);

  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'index',
            description,
          },
          {
            title: 'ShowCases',
            description,
          },
          {
            title: 'Customization',
            description,
          },
        ]}
      />
    </>
  );
};

export default Stepper;