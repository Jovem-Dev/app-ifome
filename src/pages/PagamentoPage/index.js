import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Axios from 'axios';
// importação da estilização
// import './styles.css';
import {
  Container,
  BackButton,
  Title,
  LeftHeader,
  DrinkHeader,
  DrinkItem,
  DrinkTitle,
  DrinkPrice,
  DeliveryTitle,
  Wrapper,
  Delivery
} from './styles';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PagamentoPage = ({ navigation }) => {
  const [cartoes, setCartoes] = useState([])
  const [nome, setNome] = useState([])
  useEffect(() => {
    async function loadCartoes(){
      const usuarioLogado = await AsyncStorage.getItem('usuarioLogado');
      const nomeUSuario = await setNome(usuarioLogado);
      const response = await api.get(`/cartoesNome/${nome}`)
      setCartoes(response.data)
    }
    loadCartoes();
  }, [])
  return (
    <Container>
      <DrinkItem >
        <LeftHeader>
          <DrinkTitle>Cartão de Crédito</DrinkTitle>
          <DrinkPrice>Adicionar novo Cartão de Crédito </DrinkPrice>
        </LeftHeader>
        <MaterialIcons onPress={() => navigation.navigate('PagamentoInsert')} name="add" size={22} color="#000" />
      </DrinkItem>

      <Title>Seu cartão de Credito</Title>
      {cartoes.map(cartao => (
        <Delivery>
          <Wrapper>

            <DeliveryTitle>Nome: {cartao.card_holder_name}, Numero do Cartão: {cartao.card_number} <br />  Data de Validade: {cartao.card_expiration_date}, Código do Cartão {cartao.card_cvv} </DeliveryTitle>
            <MaterialIcons name="delete" size={22} color="#999999" />
          </Wrapper>
        </Delivery>
      ))}
    </Container>

  )
}



export default PagamentoPage;


PagamentoPage.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: 'Formas de Pagamento',
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