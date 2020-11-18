import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../../home/HomeHeader';
import styles from './styles'
import firebase from '../../../services/firebase'


function Publications() {
  const [listAds, setListAds] = useState([]);

  useEffect(() => {
    try {
      firebase.database().ref('/ads').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            title: childItem.val().title,
            price: childItem.val().price,
            describe: childItem.val().describe,
            visibleFrom: childItem.val().visibleFrom,
            visibleTo: childItem.val().visibleTo,
            image: childItem.val().image,
            number: childItem.val().number
          });
        });
        setListAds(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

  function delAd(key) {
    firebase.database().ref('/ads/' + key).remove()
  }

  return (
    <KeyboardAvoidingView>
      <View style={styles.publicacaoView}>
        <Header />
        <FlatList
          data={listAds}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View style={styles.publicationsBox}>
              <View style={styles.visivelBox}>
                <View style={styles.visivelFromBox}>
                  <Text style={styles.visivelFrom}>Visível a Partir de: </Text>
                  <Text style={styles.statsFrom}>{item.visibleFrom}</Text>
                </View>
                <View style={styles.visiveUntillBox}>
                  <Text style={styles.visivelUntil}>Disponível até: </Text>
                  <Text style={styles.statsUntil}>{item.visibleTo}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.btnEnviar} onPress={() => { delAd(item.key) }}>
                <Icon name="trash-alt" size={26} />
              </TouchableOpacity>
              <Text>{item.number}</Text>
              <Text>{item.title}</Text>
              <View style={styles.fotoBox}>
                <View style={styles.item}>
                  <Image
                    style={styles.itemFoto}
                    source={{ uri: `${item.image}` }}
                  />
                  <Text>R$ {item.price}</Text>
                </View>
              </View>
              <View style={styles.descBox}>
                <Text style={styles.textDesc}>
                  {item.describe}
                  {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. */}
                </Text>
              </View>
            </View>
          )} />
      </View>
    </KeyboardAvoidingView>
  );
}

export default Publications;
