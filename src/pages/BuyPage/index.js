import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Axios from 'axios';
// importação da estilização
// import './styles.css';
import { Container, BackButton, Title } from './styles';


// const initialValue = {
//   date: '',
//   restaurant_name: '',
//   restaurant_url: '',
//   order_number: 0,
//   order: ''
// }

// CAMPOS DO FORM: ID, DATA, NOME DO RESAURANTE, URL DA IMAGEM DO RESTAURANTE, NUMERO DE PEDIDO E PEDIDO
const BuyPage = () => {
  const [data, setData] = useState("");
  const [restaurante, setRestaurante] = useState("");
  // const [url, setUrl] = useState("");
  const [numero, setNumero] = useState("");
  const [pedido, setPedido] = useState("");
  const [purcharseList, setPurcharseList] = useState([])

  
  const submitPurcharse = () => {
    
    Axios.post('http://localhost:3001/api/insert', {data:data, restaurante: restaurante, numero: numero, pedido: pedido }).then(() =>{
      console.log('Sucesso ao cadastrar novo Pedido')
    })

  };

  return (
    <Container>
      <Title>Preencha o formulario para fazer um pedido</Title>
      <form>
        <div className="buy-form__group">
          <label htmlFor="date">Data</label>
          <input id="date" name="date" type="date" onChange={(e) => {
            setData(e.target.value)
          }} /> {/* id="" --> id que esta fazendo relaçao com o for do input  */}

          <label htmlFor="restaurant_name" >Nome do Restaurante</label>
          <select class="select" id="restaurant_name" name="restaurant_name" type="text" onChange={(e) => {
              setRestaurante(e.target.value)
          }} >
            <option value="McDonalds's - Centro">McDonalds's - Centro</option>
            <option value="Burguer King - Santo Antonio Do Sudoeste">Burguer King - Santo Antonio Do Sudoeste</option>
            <option value="Habibs - Sao Miguel do Oeste">Habibs - Sao Miguel do Oeste</option>
          </select>
         
          <label htmlFor="order_number">Número de Pedido</label>
          <input id="order_number" name="order_number" type="number" onChange={(e) => {
            setNumero(e.target.value)
          }} />

          <label htmlFor="">Pedido</label>
          <select class="select" id="order" name="order" type="text" onChange={(e) => {
              setPedido(e.target.value)
          }} >
            <option value="Combo hambumber, batata e milkshake">Combo hambumber, batata e milkshake ( McDonalds's )</option>
            <option value="Burguer costela especial">Burguer costela especial ( Habibs - Sao Miguel do Oeste )</option>
            <option value="Pizza italiana especial">Pizza italiana especial ( Burguer King - Santo Antonio Do Sudoeste )</option>
            <option value="Pizza italiana especial">Picanha na brasa ( Burguer King - Santo Antonio Do Sudoeste )</option>
          </select>
          
          <div>
            <button type="submit" onClick={submitPurcharse}>Salvar</button>
          </div>
        </div>
      </form>

    </Container>

  )
}



export default BuyPage;


BuyPage.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: 'FAZER UM PEDIDO',
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