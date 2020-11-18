import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {headerColor} from '../../assets/helper/Colors'

const HomeHeader = ({navigation}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Vitrine</Text>
      <Text style={styles.subHeaderText}>Comércio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: headerColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#3091db',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#594A46',
    fontSize: 26,
    marginTop: 35,
    //marginTop: 10,
  },
  subHeaderText: {
    letterSpacing: 10,
    color: '#006FB2',
    fontSize: 13,
    marginTop: -5,
    marginBottom: 5,
  },
});

export default HomeHeader;
