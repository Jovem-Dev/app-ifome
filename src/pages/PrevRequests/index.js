import React, { useEffect, useState } from 'react';

import {
  Container,
  Wrapper,
  Warning,
  Suggestion,
  Image,
  Message,
} from './styles';

import Purchases from '../../components/Purchases';
import Axios from 'axios';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PrevRequests() {
  const [purcharseList, setPurcharseList] = useState([])
  const [nome, setNome] = useState([])
  useEffect(() => {
    async function loadPurcharse(){
      const usuarioLogado = await AsyncStorage.getItem('usuarioLogado');
      const nomeUSuario = await setNome(usuarioLogado);
      const response = await api.get(`/pedidos/entregueUsuario/${nome}`)
      setPurcharseList(response.data)
    }
    loadPurcharse();
  }, [])
 

  return (
    <Container>
      {purcharseList != "" ? (
      <Purchases />
    ) : (
      <Wrapper>
        <Image />
        <Warning>Nenhum pedido anterior</Warning>
        <Message>
          <Suggestion>Que tal experimentar um lugar novo?</Suggestion>
          <Suggestion>É só selecionar Início</Suggestion>
        </Message>
      </Wrapper>
    )}
    </Container>
  );
}

PrevRequests.navigationOptions = {
  title: 'ANTERIORES',
};
