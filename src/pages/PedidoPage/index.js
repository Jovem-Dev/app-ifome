import React from 'react';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  BackButton,
  Balance,
  Title,
  Value,
  QrCode,
  Options,
  Option,
  Message,
  Panel,
  Money,
} from './styles';

export default function PedidoPage({ navigation }) {
  const item = navigation.getParam('item');
  return (
    <Container>
      <Panel>
        <Balance>
          <Title>Valor a pagar pelo pedido</Title>
          <Money>
            <Value>R${item.preço}</Value>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#F00" />
          </Money>
        </Balance>
      </Panel>

      <Options horizontal>
        <Option onPress={() => {}}>
          <MaterialIcons name="credit-card" size={35} color="#999" />
          <Message>Selecione a forma de pagamento</Message>
        </Option>
        
      </Options>
      <Options horizontal>
        <Option onPress={() => {}}>
          <MaterialCommunityIcons name="map-marker" size={35} color="#999" />
          <Message>Selecione o endereço</Message>
        </Option>
        
      </Options>
    </Container>
  );
}

PedidoPage.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: 'Concluir Pedido',
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
