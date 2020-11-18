import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import firebase from '../../../services/firebase'

import styles from './Styles'

import Header from '../../home/HomeHeader';
import Date from '../../home/DateComponent'

const Home = () => {

  const [ads, setAds] = useState([]);

  useEffect(() => {
    firebase.database().ref('/ads').on('value', (snapshot) => {
      const list = [];
      snapshot.forEach((childItem) => {
        list.push({
          key: childItem.key,
          age: childItem.val().age,
          name: childItem.val().name,
          title: childItem.val().title,
          price: childItem.val().price,
          describe: childItem.val().describe,
          visibleFrom: childItem.val().visibleFrom,
          visibleTo: childItem.val().visibleTo,
        });
      });
      setAds(list.length);
    })
  })
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Date style={styles.date} />
        <View style={styles.content}>
          <Text style={styles.textContent}>
            Resumo dos seus Anúncios dos últimos 30 dias
          </Text>
        </View>
        <View style={styles.statsContent}>
          <View style={styles.stats}>
            <Text style={styles.statsText}>Ativos</Text>
            <Text style={styles.statsNumber}>{ads}</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.statsText}>Programados</Text>
            <Text style={styles.statsNumber}>1</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.statsText}>Vencidos</Text>
            <Text style={styles.statsNumber}>2</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Home;