import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {browserHistory} from "react-router";

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

export default function PurchasesAnd({ navigation }) {
  const [nome, setNome] = useState([])
  const [purcharseList, setPurcharseList] = useState([])
  useEffect(() => {
    
    async function loadCartoes(){
      const usuarioLogado = await AsyncStorage.getItem('usuarioLogado');
      const nomeUSuario = await setNome(usuarioLogado);
      const response = await api.get(`/cartoesNome/${nome}`)
      setCartoes(response.data)
    }
    loadCartoes();

    async function loadPurcharse(){
      const response = await api.get(`/pedidos/andamentoPendenteUsuario/${nome}`)
      setPurcharseList(response.data)
    }
    loadPurcharse();
  }, [])
  
  async function EditPurcharse(id){
    const body = {
      status: "Entregue",
      status_cor: "success"
    };
    const response = await api.put(`/pedidos/${id}`, body)
  };

  return (
    <Container>
      {purcharseList.map(item => (
        <Item>
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
              <Message>{item.status}</Message>
            </Evaluation>
            <Menu>
              
            
              <MenuButton>
                <MenuText onClick={() => {EditPurcharse(item.id)}}>Entregue</MenuText>
              </MenuButton>
            </Menu>
          </Wrapper>
        </Item>
      ))}
    </Container>
  );
}
