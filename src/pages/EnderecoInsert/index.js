import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Axios from 'axios';
// importação da estilização
// import './styles.css';
import { Container, BackButton, Title } from './styles';
// import styles from './styles.css';
import api from '../../services/api';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Button } from 'react-native';

// const initialValue = {
//   date: '',
//   restaurant_name: '',
//   restaurant_url: '',
//   order_number: 0,
//   order: ''
// }

// CAMPOS DO FORM: ID, DATA, NOME DO RESAURANTE, URL DA IMAGEM DO RESTAURANTE, NUMERO DE PEDIDO E PEDIDO
const EnderecoInsert = () => {
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const nome = "Gustavo Noronha"

  const submitPurcharse = () => {
    api.post('api/insert/endereco', { bairro: bairro, rua: rua, numero: numero, nome: nome }).then(() => {
      console.log('Sucesso ao cadastrar novo endereço')
    })

  };

  return (
    <Container>
      <Title>Insira os dados do novo Endereço</Title>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <TextInput
          style={styles.inputbairro}
          onChange={(e) => {
            setBairro(e.target.value)
          }}
          name="bairro"
          value="Bairro"
        />
        <TextInput
          style={styles.input_rua}
          onChange={(e) => {
            setRua(e.target.value)
          }}
          name="rua"
          value="Rua"
        />
        <TextInput
          style={styles.input_numero}
          onChange={(e) => {
            setNumero(e.target.value)
          }}
          name="numero"
          value="Numero"
        />
        <Button title="Cadastrar" style={styles.button_cadastra} color="#F00000" onPress={submitPurcharse}>
        </Button>
      </View>


      {/* <form>
        <div className="buy-form__group">
        
                  
          <label htmlFor="bairro">Bairro</label>
          <input id="bairro" name="bairro" type="text" onChange={(e) => {
            setBairro(e.target.value)
          }} />
          <label htmlFor="rua">Rua</label>
          <input id="rua" name="rua" type="text" onChange={(e) => {
            setRua(e.target.value)
          }} />
           <label htmlFor="numero">Número</label>
          <input id="numero" name="numero" type="number" onChange={(e) => {
            setNumero(e.target.value)
          }} />

                        
          <div>
            <button type="submit" onClick={submitPurcharse}>Salvar</button>
          </div>
        </div>
      </form> */}

    </Container>

  )
}



export default EnderecoInsert;

const styles = StyleSheet.create({
  inputbairro: {
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    width: 350,
    marginTop: 10,
    marginLeft: 20,
    borderColor: "white",
    borderBottomColor: "gray"

  },
  input_rua: {
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    width: 350,
    marginTop: 10,
    marginLeft: 20,
    borderColor: "white",
    borderBottomColor: "gray"
  },
  input_numero: {
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

EnderecoInsert.navigationOptions = ({ navigation }) => ({
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