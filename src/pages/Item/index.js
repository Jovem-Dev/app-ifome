import React, { useEffect, useState } from 'react';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import Axios from 'axios';
import api from '../../services/api';
const fetch = require('node-fetch');
import {
  Container,
  ItemImage,
  ItemTitle,
  ItemIngredient,
  ItemPrice,
  OldPrice,
  Info,
  Details,
  Delivery,
  DeliveryTitle,
  DeliveryDelay,
  Wrapper,
  BackButton,
  LeftHeader,
  DrinkHeader,
  Message,
  SubMessage,
  DrinkItem,
  DrinkTitle,
  DrinkPrice,
  Warning,
  WarningText,
  Buy,
  BuyWrapper,
  BuyTitle,
  BuyIcon,
  Options,
  Option,
  MessageItem,

} from './styles';
import { Alert, Picker } from 'react-native';

export default function Item({ navigation }) {
  const [selectedValueCartao, setSelectedValueCartao] = useState([]);
  const [selectedValueEndereco, setSelectedValueEndereco] = useState([]);
  const [cartoes, setCartoes] = useState([])
  const [enderecos, setEnderecos] = useState([])
  const nome = "Gustavo Noronha"
  useEffect(() => {
   
    async function loadCartoes(){
      const response = await api.get(`/cartoesNome/${nome}`)
      setCartoes(response.data)
    }
    loadCartoes();

    async function loadEnderecos(){
      const response = await api.get(`/endereco/${nome}`)
      setEnderecos(response.data)
    }
    loadEnderecos();
    
  }, [])

  const cartoesMap = cartoes.map((item) => {
    return item.card_holder_name + ":" + item.card_number

  })


  const enderecosMap = enderecos.map((item) => {
    return item.bairro + " / " + item.rua + " / " + item.numero
  })

  const item = navigation.getParam('item');

  // fortmatando a hora
  var dataLib = new Date();
  var dia = dataLib.getDate();           // 1-31
  var mesLib = dataLib.getMonth();          // 0-11 (zero=janeiro)
  var ano4 = dataLib.getFullYear();       // 4 dígitos
  var hora = dataLib.getHours();          // 0-23
  var min = dataLib.getMinutes();        // 0-59
  var mesAtual = mesLib + 1;
  /////

  const data = dia + '/' + mesAtual + '/' + ano4 + ' - ' + hora + ':' + min
  const restaurante = item.restaurante
  const numero = Math.random()
  const pedido = item.nome
  const url = item.url
  const valor = item.novo_preco
  const endereco = selectedValueEndereco
  const pagamento = selectedValueCartao
  const mes = mesLib
  const usuario = nome


  ///// pedido
  const submitPurcharse = () => {
    const body = {
      data: data,
      restaurante: restaurante,
      url: url,
      numero: numero,
      status: 'Pendente',
      status_cor: 'danger',
      pedido: pedido,
      valor: valor,
      endereco: endereco,
      pagamento_cartao: pagamento,
      mes: mes,
      usuario: usuario
    };

    const responsePedido = api.post("http://localhost:3333/pedidos", body);
    if(responsePedido.status == 200 ){
      navigation.navigate('Requests')
    }
    const responsePedidoPagarme = api.post("http://localhost:3333/pedidosPagarme", body)
   
    navigation.navigate('Requests')
    setModalVisible(!isModalVisible);


  };
  ///// modal 

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //// fim - pedido

  function handleNavigate(item) {
    navigation.navigate('Item', { item });
  }

  return (

    <Container>
      {/* modal - inicio */}
      <View style={{ flex: 1 }}>

        <Modal isVisible={isModalVisible}>
          <View style={styles.view_modal}>
            <Text style={styles.texto_confirmacao}>Deseja Confirmar o Pedido?</Text>
            <Options horizontal>

              <Option>
                <MaterialIcons name="credit-card" size={35} color="red" />
                <MessageItem>Selecione a forma de pagamento</MessageItem>
                <Picker
                  selectedValue={selectedValueCartao}
                  style={styles.select}
                  onValueChange={(itemValue, itemIndex) => setSelectedValueCartao(itemValue)}
                >
                  {cartoesMap.map((item) => {
                    return (< Picker.Item label={item} value={item} />);
                  })}
                </Picker>
              </Option>

            </Options>
            <Options horizontal>

              <Option>

                <MaterialCommunityIcons name="map-marker" size={35} color="red" />
                <MessageItem>Selecione o endereço</MessageItem>
                <Picker
                  selectedValue={selectedValueEndereco}
                  style={styles.select}
                  onValueChange={(itemValue, itemIndex) => setSelectedValueEndereco(itemValue)}
                >
                  {enderecosMap.map((item) => {
                    return (< Picker.Item label={item} value={item} />);
                  })}

                </Picker>
              </Option>

            </Options>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <View style={styles.view_botao_confirma}>
                <Button color="#F00000" title="Confirmar" onPress={submitPurcharse} />
              </View>
              <View style={styles.view_botao_cancelar}>
                <Button style={styles.botao_cancelar} color="gray" title="Fechar" onPress={toggleModal} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      {/* modal - fim */}
      <Details>

        <ItemImage source={{ uri: item.url }} />
        <ItemTitle>{item.nome}</ItemTitle>
        <ItemIngredient>{item.ingredientes}</ItemIngredient>
        <Info>
          <ItemPrice>${item.novo_preco}</ItemPrice>
          <OldPrice>${item.preço}</OldPrice>
        </Info>
        <Delivery>
          <Wrapper>
            <MaterialIcons name={item.icone} size={22} color="#F00000" />
            <DeliveryTitle>{item.restaurante}</DeliveryTitle>

          </Wrapper>
          <DeliveryDelay>{item.tempo}</DeliveryDelay>
        </Delivery>


      </Details>

      <DrinkHeader>
        <LeftHeader>
          <Message>Escola sua bebida</Message>
          <SubMessage>Escolha 1 opção</SubMessage>
        </LeftHeader>
        <Warning>
          <WarningText>OPCIONAL</WarningText>
        </Warning>
      </DrinkHeader>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Coca-cola 2lt</DrinkTitle>
          <DrinkPrice>+ R$ 11,00</DrinkPrice>
        </LeftHeader>
        <MaterialIcons name="add" size={22} color="#000" />
      </DrinkItem>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Fanta uva 2lt</DrinkTitle>
          <DrinkPrice>+ R$ 11,00</DrinkPrice>
        </LeftHeader>
        <MaterialIcons name="add" size={22} color="#000" />
      </DrinkItem>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Suco de Maracujá 300ml</DrinkTitle>
          <DrinkPrice>+ R$ 9,50</DrinkPrice>
        </LeftHeader>
        <MaterialIcons name="add" size={22} color="#000" />
      </DrinkItem>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Dolly Guaraná</DrinkTitle>
          <DrinkPrice>+ R$ 10,00</DrinkPrice>
        </LeftHeader>
        <MaterialIcons name="add" size={22} color="#000" />
      </DrinkItem>

      <Details>
        <Button title="Fazer Pedido" color="#F00000" onPress={toggleModal}>
        </Button>

      </Details>

    </Container>


  );
}
const styles = StyleSheet.create({
  select: {
    borderWidth: 1,
    borderColor: "#eee",
    height: 50,
    width: 460
  },
  texto_confirmacao: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: "bold",
    color: 'black',
    marginTop: 20
  },
  view_modal: {
    backgroundColor: 'white',
    borderRadius: 8
  },
  view_botao_confirma: {
    flex: 0,
    width: 150,
    marginLeft: 20,

  },
  view_botao_cancelar: {
    width: 150,
    marginLeft: 10,
  }

});


Item.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: 'DETALHES DO ITEM',
  headerTitleAlign: 'center',
  headerStyle: {
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerLeft: () => (
    <BackButton onPress={() => navigation.goBack()}>
      <MaterialIcons name="keyboard-arrow-left" color="#f00" size={35} />
    </BackButton>
  ),
});
