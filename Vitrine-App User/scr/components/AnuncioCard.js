import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';

function AnuncioCard(props) {
   // CARD
   //
   // Esta função recebe um objeto Publicação, que tem a seguinte estrutura:
   // Publicação
   // -- Estabelecimento
   // -- Anuncios
   // ---- Anuncio
   // ------Produtos
   // --------Produto
   function CartaoAnuncio(props) {

      // console.log('=============>>>> function Cartao Anuncio ===============');
      // console.log(props);


      // Obtém todos os Anúncios atribuídos à Publicação recebida.
      var anuncios = props.publicacao.anuncios.map(function (item) {
         // console.log('ID do Anúncio: ' + item.idAnuncio);
         
         return {
            id: item.idAnuncio,
            titulo: item.titulo,
            descricao: item.descricao,
            produtos: item.produtos
         };
      });
  
      return (
         <View style={{ paddingBottom: 10, paddingTop: 1, backgroundColor: '#C5C5C5' }}>
            <FlatList
               data={anuncios}
               keyExtractor={(item) => item.idAnuncio}
               renderItem={(anuncio) => {
                  return (
                     <View >
                        <CartaoAnuncioHeader estabelecimento={props.publicacao.estabelecimento} />
                        <CartaoAnuncioTitulo anuncios={anuncio.item} />
                        <CartaoAnuncioProdutos produtos={anuncio.item.produtos} />
                        <CartaoAnuncioDescricao anuncios={anuncio.item} />
                        <CartaoAnuncioMidiasSociais />
                     </View>
                  )
               }}>
            </FlatList>
         </View>
      )
   }

   // CARD - HEADER
   function CartaoAnuncioHeader(props) {

      let end = props.estabelecimento.endereco;
      let compl_end = props.estabelecimento.complEndereco;

      if (compl_end != '') {
         compl_end = ' / ' + compl_end;
      }

      let end_completo_1 = end.logradouro + ', ' + end.numero + compl_end;
      let end_completo_2 = end.bairro + ' - ' + end.cidade + ' - ' + end.uf;
      let horario = '';

      let {estabelecimento} = props;

      // console.log('=======================================');
      // console.log(props);
      // console.log('7======================================');

      return (
         <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFE', borderBottomColor: '#E1E0DF', borderBottomWidth: 1 }}>
            {/* <View style={{ width: 78, alignItems: 'center', justifyContent: 'center' }}>
               <Text>IMG</Text>
            </View> */}
            <View style={{ width: '100%', height: 70, alignItems: 'center', justifyContent: 'center' }}>
               <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{estabelecimento.nome}</Text>
               <Text style={{ fontSize: 14 }}>{end_completo_1}</Text>
               <Text style={{ fontSize: 14 }}>{end_completo_2}</Text>
               {/* <Text style={{ fontSize: 14 }}>{horario}</Text> */}
            </View>
         </View>
      )
   }

   // CARD - TÍTULO
   function CartaoAnuncioTitulo(props) {

      // console.log('=======================================');
      // console.log(props); 
      // console.log('11======================================');   

      return (
         <View style={{ width: '100%', height: 40, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3949AB' }}>{props.anuncios.titulo}</Text>
         </View>
      )
   }

   // CARD - PRODUTOS
   function CartaoAnuncioProdutos(props) {
      var produtos = props.produtos.map(function (item) {
         // console.log('ID do Produto: ' + item.idProduto);

         return {
            idProduto: item.idProduto,
            descricao: item.descricao,
            preco: item.preco,
            imagem: item.imagem,
            imagem_byte: item.imagem_byte
         };
      });

      // console.log('=======================================');
      // console.log(props);
      // console.log('1======================================');

      return (
         <View style={{ height: 220, backgroundColor: '#FFFFFE', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 5, borderBottomColor: '#E1E0DF', borderBottomWidth: 1 }}>
            <FlatList
               horizontal
               data={produtos}
               keyExtractor={(item) => item.idProduto.toString()}
               renderItem={(produto) => {
                  return (
                     <View style={{ flexDirection: 'column', width: 127, height: '100%', backgroundColor: '#FFFFFE', marginHorizontal: 1 }}>
                        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                           <Image source={{ uri: `data:image/png;base64,${produto.item.imagem_byte}` }} style={{ width: 160, height: 160 }} />
                        </View>
                        <View style={{ flexGrow: 0, alignItems: 'center', height: 20 }}>
                           <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#3949AB' }}>R$ {produto.item.preco}</Text>
                        </View>
                     </View>
                  )
               }}>
            </FlatList>
         </View>
      )
   }

   // CARD - DESCRIÇÃO
   function CartaoAnuncioDescricao(props) {

      // console.log('=======================================');
      // console.log(props); 
      // console.log('11======================================');   

      return (
         <View style={{ width: '100%', height: 62, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E6F5FF', borderBottomColor: '#E1E0DF', borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 5, paddingRight: 5, textAlign: "center" }}>{props.anuncios.descricao}</Text>
         </View>
      )
   }

   // CARD - MÍDIAS SOCIAIS
   function CartaoAnuncioMidiasSociais(props) {

      // console.log('=======================================');
      // console.log(props); 
      // console.log('11======================================');   

      return (
         <View style={{ flexDirection: 'row', width: '100%', height: 60, backgroundColor: '#F3F2F0', borderBottomColor: '#DBDBDB', borderBottomWidth: 1 }}>
            <View style={{ width: 70, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
               <Icon name="whatsapp" size={22} color="green" />
            </View>
            <View style={{ width: 50, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
               <Icon name="shopping-cart" size={22} color="#E98E1E" />
            </View>
         </View>
      )
   }

   return (
      <CartaoAnuncio publicacao={props.publicacao} />
   )
}

export { AnuncioCard };