import React, { useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { Container } from './styles';

import Address from '../../components/Address';
import Input from '../../components/Input';
import Coupon from '../../components/Coupon';
import Suggestions from '../../components/Suggestions';
import Promotions from '../../components/Promotions';
import Offers from '../../components/Offers';
import Categories from '../../components/Categories';
import Restaurants from '../../components/Restaurants';

import HeaderLeft from '../../components/Header/HeaderLeft';
import HeaderRight from '../../components/Header/HeaderRight';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import { MessageItem, Option, Options } from '../Item/styles';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from '../../components/Input/styles';

function Dashboard() {

  const [value, onChangeText] = useState('Digite Seu Nome');
  const [isModalVisible, setModalVisible] = useState(true);
 
  const toggleModal =  async ()  => {
    await AsyncStorage.setItem('usuarioLogado', value);
    setModalVisible(!isModalVisible);
  }


  return (

    <Container>
     
        <View>
          <Address />
          <Input placeholder="Pratos ou Restaurantes" />
          <Coupon />
          <Suggestions />
          <Promotions />
          <Offers />
          <Categories />
          <Restaurants title="Restaurantes" display />
        </View>
 
          <View style={{ flex: 1 }}>

            <Modal isVisible={isModalVisible}>

              <View style={styles.view_modal}>
                  <Text style={styles.texto_confirmacao}>Insira seu nome</Text>
                <Options horizontal>

                  <Option>
                    {/* <MaterialIcons name="credit-card" size={35} color="red" /> */}
                    {/* <MessageItem>Nome de Usuario</MessageItem> */}
                    <TextInput 
                      onChangeText={text => onChangeText(text)}
                      name="nome"
                      style={styles.textInput} placeholder="Digite seu Nome" />
                  </Option>

                </Options>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                  <View style={styles.view_botao_confirma}>
                    <Button onPress={toggleModal} color="#F00000" title="Confirmar" />
                  </View>
                </View>
              </View>
            </Modal>
          </View>
 

    </Container>

  );
}
const styles = StyleSheet.create({
  select: {
    borderWidth: 1,
    borderColor: "#eee",
    height: 50,
    width: 460
  },
  textInput: {
    height: 70,
    marginLeft: 70,

  },
  texto_confirmacao: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: "bold",
    color: 'black',
    marginTop: 20,
    marginLeft: -30
  },
  view_modal: {
    backgroundColor: 'white',
    borderRadius: 8
  },
  view_botao_confirma: {
    flex: 0,
    width: 150,
    marginLeft: 100,

  },

});


Dashboard.navigationOptions = {
  headerTitleStyle: {
    display: 'none',
  },
  headerStyle: {
    height: 70,
  },
  headerRight: () => <HeaderRight />,
  headerLeft: () => <HeaderLeft />,
};

export default withNavigationFocus(Dashboard);
