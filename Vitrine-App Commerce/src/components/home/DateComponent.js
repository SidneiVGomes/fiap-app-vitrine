import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';
import 'moment/min/locales';


export default class DateComponent extends React.Component {
  constructor(props) {
    moment.locale('pt-br')
    super(props);
    this.state = {};
  }
  render() {
    return ( 
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{moment().date()} de {moment().format('MMMM')}, {moment().format('dddd')} </Text>
        <Text style={styles.welcomeMessage}>Boa tarde, Sheila</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dateContainer: {
    marginTop: 15
  },
  dateText: {

    color: '#0A0A0A',
    fontSize: 16,
    marginTop: 10,
  },
  welcomeMessage:{

    color: '#0A0A0A',
    fontSize: 26,
    marginLeft: -5,  
  }
});
