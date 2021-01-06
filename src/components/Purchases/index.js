import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Item,
  Date,
  Wrapper,
  Restaurant,
  RestaurantImage,
  Info,
  Name,
  OrderDetails,
  OrderNumber,
  Order,
  Evaluation,
  Message,
  Star,
  Menu,
  MenuButton,
  MenuText,
} from './styles';

import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Purchases() {
  const [nome, setNome] = useState([])
  const [purcharseList, setPurcharseList] = useState([])

  //https://api.ifome.net/api/get/anterior
  useEffect(() => {
    async function loadPurcharse(){
      const usuarioLogado = await AsyncStorage.getItem('usuarioLogado');
      const nomeUSuario = await setNome(usuarioLogado);
      const response = await api.get(`/pedidos/entregueUsuario/${nome}`)
      setPurcharseList(response.data)
    }
    loadPurcharse();
  }, [])
 
  async function deletePurcharse(id){
    const response = await api.delete(`pedidos/${id}`)
  }

  return (
    <Container>
      {purcharseList.map(item => (
        <Item key={item.id}>
          <Date>{item.data}</Date>

          <Wrapper>
            <Restaurant>
              <RestaurantImage source={{ uri: item.url }} />
              <Info>
                <Name>{item.restaurante}</Name>
                <OrderNumber>Pedido entregue {item.numero}</OrderNumber>
              </Info>
            </Restaurant>
            <OrderDetails>
              <Order>{item.pedido}</Order>
            </OrderDetails>
            <Evaluation>
              <Message>Avaliação do pedido</Message>
              <Star>
                <MaterialIcons name="star" color="#ffcc33" size={20} />
                <MaterialIcons name="star" color="#ffcc33" size={20} />
                <MaterialIcons name="star" color="#ffcc33" size={20} />
                <MaterialIcons name="star" color="#ffcc33" size={20} />
                <MaterialIcons name="star" color="#ffcc33" size={20} />
              </Star>
            </Evaluation>
            <Menu>
              <MenuButton>
                <MenuText onClick={() => {deletePurcharse(item.id)}}>Excluir</MenuText>
              </MenuButton>
              <MenuButton>
                <MenuText>Detalhes</MenuText>
              </MenuButton>
            </Menu>
          </Wrapper>
        </Item>
      ))}
    </Container>
  );
}
