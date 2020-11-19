import React, { useState, useEffect } from 'react';

import {
  Container,
  Header,
  Title,
  CategoriesList,
  Item,
  ItemImage,
  ItemTitle,
} from './styles';
import Axios from 'axios';

import api from '../../services/api';

export default function Categories({ navigation }) {

  const [categories, setCategories] = useState([])

  useEffect(() =>{
    api.get('api/categorias/get').then((response)=>{
      setCategories(response.data)
    })
  }, [])

  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>

      <CategoriesList horizontal>
        {categories.map(item => (
          <Item key={item.id} >
            <ItemImage source={{ uri: item.url }} />
            <ItemTitle>{item.nome}</ItemTitle>
          </Item>
        ))}
      </CategoriesList>
    </Container>
  );
}
