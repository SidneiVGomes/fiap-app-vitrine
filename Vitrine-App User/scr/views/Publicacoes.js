import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { AnuncioCard } from '../components/AnuncioCard';
import AsyncStorage from '@react-native-community/async-storage';
import apiService from '../services/ApiService';

export default function Publicacoes() {
  const [userId, setUserId] = useState(0);
  const [userAlcanceKM, setAlcanceKM] = useState(0);
  const [jsonAnuncios, setJsonAnuncios] = useState([]);

  useEffect(() => {
    recuperarUserMemoria();
  }, [])
   
  async function recuperarUserMemoria() {
    let registroUser = await AsyncStorage.getItem('userData')
      .then((registroUser) => {
        let jsonUsuario = JSON.parse(registroUser);

        if (jsonUsuario != null) {
          setUserId(jsonUsuario.idUsuario);
          setAlcanceKM(jsonUsuario.distanciaAnuncio.toString());
        }

        getAnuncios();
      });
  }

  function getAnuncios() {
    apiService.get('publicacoes/proximas?idUsuario=' + userId + '&alcanceKM=' + userAlcanceKM)
      .then((response) => setJsonAnuncios(response.data))
      .catch((error) => { console.log(error) });
  }

  console.log('============= $$$ PUBLICAÇÕES $$$ ===============');
  console.log(jsonAnuncios)

  return (
    <View >
      <FlatList
        data={jsonAnuncios}
        keyExtractor={(item) => item.idPublicacao.toString()}
        renderItem={(publicacao) => <AnuncioCard publicacao={publicacao.item} />} >
      </FlatList>
    </View>
  );
}
