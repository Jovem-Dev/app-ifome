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

const EnderecoPage = ({ navigation }) => {
  const [nome, setNome] = useState([])
  const [enderecos, setEnderecos] = useState([])

  useEffect(() => {
    async function loadEnderecos(){
      const usuarioLogado = await AsyncStorage.getItem('usuarioLogado');
      const nomeUSuario = await setNome(usuarioLogado);
      const response = await api.get(`/endereco/${nome}`)
      setEnderecos(response.data)
    }
    loadEnderecos();
  }, [])
  return (
    <Container>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Adicionar novo Endereço</DrinkTitle>
          <DrinkPrice>Inclua o endereço que levamos até você</DrinkPrice>
        </LeftHeader>
        <MaterialIcons onPress={() => navigation.navigate('EnderecoInsert')} name="add" size={22} color="#000" />
      </DrinkItem>


      <Title>Seus Endereços</Title>
      {enderecos.map(endereco => (
        <Delivery>
          <Wrapper>

            <DeliveryTitle> Bairro: { endereco.bairro },  Rua: { endereco.rua },  Numero: { endereco.numero }</DeliveryTitle>
            <MaterialIcons name="delete" size={22} color="#999999" />
          </Wrapper>
        </Delivery>
      ))}
    </Container>

  )
}



export default EnderecoPage;


EnderecoPage.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: 'Endereços',
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