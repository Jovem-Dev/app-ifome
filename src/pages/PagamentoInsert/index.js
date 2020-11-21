import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Axios from 'axios';
// importação da estilização
// import './styles.css';
import { Container, BackButton, Title } from './styles';

import api from '../../services/api';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';


// CAMPOS DO FORM: ID, DATA, NOME DO RESAURANTE, URL DA IMAGEM DO RESTAURANTE, NUMERO DE PEDIDO E PEDIDO
const PagamentoInsert = () => {
  
  const [numeroDoCartao, setNumeroDoCartao] = useState("");
  const nomeDoCartao = "Gustavo Noronha"
  const [expiracaoDoCartao, setExpiracaoDoCartao] = useState("");
  const [codigoDoCartao, setCodigoDoCartaoo] = useState("");
  
  
  const submitPurcharse = () => {
    const body = {
      numeroDoCartao: numeroDoCartao, nomeDoCartao: nomeDoCartao, expiracaoDoCartao: expiracaoDoCartao, codigoDoCartao: codigoDoCartao
    };
    
    fetch('http://api.ifome.net/api/insert/cartoes', {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });

    fetch('http://api.ifome.net/api/insert/cartoes/pagarme', {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });

  };

  return (
    <Container>
      <Title>Insira os dados do novo Endereço</Title>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <TextInput
          style={styles.input_numero}
          onChange={(e) => {
            setNumeroDoCartao(e.target.value)
          }}
          name="numero"
          value="Numero "
        />
        <TextInput
          style={styles.input_expiracao}
          onChange={(e) => {
            setExpiracaoDoCartao(e.target.value)
          }}
          name="expiracao"
          value="Expiracao"
        />
        <TextInput
          style={styles.input_codigo}
          onChange={(e) => {
            setCodigoDoCartaoo(e.target.value)
          }}
          name="codigo"
          value="Codigo"
        />
        <Button title="Cadastrar" style={styles.button_cadastra} color="#F00000" onPress={submitPurcharse}>
        </Button>
      </View>
      
      {/* <form>
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
      </form> */}

    </Container>

  )
}


const styles = StyleSheet.create({
  input_numero: {
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    width: 350,
    marginTop: 10,
    marginLeft: 20,
    borderColor: "white",
    borderBottomColor: "gray"

  },
  input_expiracao: {
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    width: 350,
    marginTop: 10,
    marginLeft: 20,
    borderColor: "white",
    borderBottomColor: "gray"
  },
  input_codigo: {
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    width: 350,
    marginTop: 10,
    marginLeft: 20,
    borderColor: "white",
    borderBottomColor: "gray",
    marginBottom: 30
  },
  button_cadastra:{
    width: 320,
  }
  
});

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