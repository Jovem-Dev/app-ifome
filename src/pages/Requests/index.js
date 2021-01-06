import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import {
  Container,
  Wrapper,
  Warning,
  Suggestion,
  Image,
  Message,
} from './styles';
import PurchasesAnd from '../../components/PurcharseAnd';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Requests() {
  const [nome, setNome] = useState([])
  const [purcharseList, setPurcharseList] = useState([])
  
  useEffect(() => {
    async function loadPurcharse(){
      const usuarioLogado = await AsyncStorage.getItem('usuarioLogado');
      const nomeUSuario = await setNome(usuarioLogado);
      const response = await api.get(`/pedidos/andamentoPendenteUsuario/${nome}`)
      setPurcharseList(response.data)
    }
    loadPurcharse();
  }, [])

  return (
    <Container>
    {purcharseList != "" ? (
      <PurchasesAnd />
    ) : (
      <Wrapper>
        <Image />
        <Warning>Nenhum pedido em andamento</Warning>
        <Message>
          <Suggestion>Que tal experimentar um lugar novo?</Suggestion>
          <Suggestion>É só selecionar Início</Suggestion>
        </Message>
      </Wrapper>
    )}
    </Container>
    
  

  );

}

Requests.navigationOptions = {
  title: 'ANDAMENTO',
};
