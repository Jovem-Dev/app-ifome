import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Axios from 'axios';
// importação da estilização
// import './styles.css';
import { Container, BackButton, Title } from './styles';

import api from '../../services/api';


// CAMPOS DO FORM: ID, DATA, NOME DO RESAURANTE, URL DA IMAGEM DO RESTAURANTE, NUMERO DE PEDIDO E PEDIDO
const PagamentoInsert = () => {
  
  const [numeroDoCartao, setNumeroDoCartao] = useState("");
  const nomeDoCartao = "Gustavo Noronha"
  const [expiracaoDoCartao, setExpiracaoDoCartao] = useState("");
  const [codigoDoCartao, setCodigoDoCartaoo] = useState("");
  
  
  const submitPurcharse = () => {
    api.post('/api/insert/cartoes/pagarme', { numeroDoCartao: numeroDoCartao, nomeDoCartao: nomeDoCartao, expiracaoDoCartao: expiracaoDoCartao, codigoDoCartao: codigoDoCartao }).then(() =>{
      console.log('Sucesso ao cadastrar novo cartão')
    })
    api.post('/api/insert/cartoes', { numeroDoCartao: numeroDoCartao, nomeDoCartao: nomeDoCartao, expiracaoDoCartao: expiracaoDoCartao, codigoDoCartao: codigoDoCartao }).then(() =>{
      console.log('Sucesso ao cadastrar novo cartão')
    })

  };

  return (
    <Container>
      <Title>Insira os dados do novo Endereço</Title>
      <form>
        <div className="buy-form__group">
        
                  
          <label htmlFor="numeroCartao">Numero do Cartão</label>
          <input id="numeroCartao" name="numeroCartao" type="number" onChange={(e) => {
            setNumeroDoCartao(e.target.value)
          }} />
          <label htmlFor="expiracao">Data de Expiração do Cartão ( Ex: 1220 )</label>
          <input id="expiracao" name="expiracao" type="number" onChange={(e) => {
            setExpiracaoDoCartao(e.target.value)
          }} />
           <label htmlFor="codigo">Código do Cartão</label>
          <input id="codigo" name="codigo" type="number" onChange={(e) => {
            setCodigoDoCartaoo(e.target.value)
          }} />

                        
          <div>
            <button type="submit" onClick={submitPurcharse}>Salvar</button>
          </div>
        </div>
      </form>

    </Container>

  )
}



export default PagamentoInsert;


PagamentoInsert.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: 'Insirir um Novo Endereço',
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