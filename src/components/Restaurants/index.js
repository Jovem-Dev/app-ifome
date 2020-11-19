import React, { useState, useEffect } from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import Axios from 'axios';

import {
  Container,
  Header,
  Title,
  RestaurantList,
  Item,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemDescription,
  Star,
  Categories,
  Distance,
  Delay,
} from './styles';

import api from '../../services/api';

export default function Restaurants({ title, display }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() =>{
    api.get('api/restaurantes/get').then((response)=>{
      setRestaurants(response.data)
    })
  }, [])

  return (
    <Container>
      <Header display={display}>
        <Title>{title}</Title>
      </Header>

      <RestaurantList>
        {restaurants.map(item => (
          <Item key={item.id}>
            <ItemImage source={{ uri: item.url }} />
            <ItemInfo>
              <ItemTitle>{item.nome}</ItemTitle>
              <ItemDescription>
                <MaterialIcons name="star" size={20} color="#ff7b00" />
                <Star>{item.estrelas ? item.estrelas : 'Novo!'} </Star>
                <Categories>{item.categoria} </Categories>
                <Distance>{item.distancia}</Distance>
              </ItemDescription>
              <Delay>{item.tempo}</Delay>
            </ItemInfo>
          </Item>
        ))}
      </RestaurantList>
    </Container>
  );
}
