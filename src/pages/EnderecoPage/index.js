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

const EnderecoPage = ({ navigation }) => {
  const nome = "Gustavo Noronha"
  const [enderecos, setEnderecos] = useState([])

  useEffect(() => {
    api.get(`/api/get/enderecos/${nome}`).then((response) => {
      setEnderecos(response.data)
    })
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