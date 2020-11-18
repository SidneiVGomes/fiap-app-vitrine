import React from 'react';
import { View } from 'react-native';

import Header from '../../home/HomeHeader';
import Form from './Form/index';

class Ad extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Form />
      </View>
    );
  }
}

export default Ad;