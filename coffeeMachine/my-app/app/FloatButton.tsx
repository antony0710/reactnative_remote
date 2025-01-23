import React from 'react';
import { FileTextOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { DollarOutlined } from '@ant-design/icons';

const TextFloatButton = () => {
  return (
    <View style={styles.floatingButton}>
        <Button type="primary"
            icon={<DollarOutlined spin 
                style={{ fontSize: '26px' }}
                />}
        style={{ fontSize: '26px',borderRadius: 50, width: 150, height: 50, textAlign: 'center' }}
        >Payment</Button>
    </View>
  );
};
const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute', // Absolute positioning
        bottom: 20, // Distance from the bottom
        left: "50%",
      },
});
export default TextFloatButton;