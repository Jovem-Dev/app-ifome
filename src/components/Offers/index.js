import React, { useState, useEffect } from 'react';


import { withNavigation } from 'react-navigation';

import { MaterialIcons } from '@expo/vector-icons';
import api from '../../services/api';

import { formatNumber } from '../../utils/formatNumber';

import {
  Container,
  Header,
  Info,
  Title,
  SubTitle,
  SeeMoreButton,
  SeeMoreText,
  OfferList,
  ItemInfo,
  Item,
  ItemImage,
  ItemTitle,
  ItemPrice,
  OldPrice,
  Price,
} from './styles';

function Offers({ navigation }) {
  const [offers, Setoffers] = useState([])

  useEffect(() => {
    api.get('/api/get/').then((response) => {
      Setoffers(response.data)
    })
  }, [])

  function handleNavigate(item) {
    navigation.navigate('Item', { item });
  }

  return (
    <Container>
      <Header>
        <Info>
          <Title>Esta com fome?</Title>
          <SubTitle>Pratos com entrega grátis</SubTitle>
          
        </Info>
        <SeeMoreButton onPress={() => { }}>
          <SeeMoreText>Ver mais</SeeMoreText>
        </SeeMoreButton>
      </Header>
      {offers != "" ? (
        <OfferList horizontal>
          {offers.map(offer => (
            <Item key={offer.id} onPress={() => handleNavigate(offer)}>
              <ItemImage source={{ uri: offer.url }} />
              <ItemInfo>
                <ItemTitle>{offer.nome}</ItemTitle>
                <ItemPrice>
                  <Price>${offer.novo_preco}</Price>
                  <OldPrice>${offer.preço}</OldPrice>
                  <MaterialIcons name="local-offer" size={15} color="#000" />
                </ItemPrice>
              </ItemInfo>
            </Item>
          ))}
        </OfferList>
      ) : (
          <Header>
            <Info>
              <SubTitle>Nenhum Restaurante com Ofertas disponiveis no momento</SubTitle>
            </Info>
          </Header>
        )}
    </Container>
  );
}

export default withNavigation(Offers);
