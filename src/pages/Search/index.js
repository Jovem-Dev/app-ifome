import React, { useState, useEffect } from 'react';

import {
  Container,
  SearchBar,
  CategoriesList,
  Title,
  Item,
  ItemImage,
  ItemTitle,
} from './styles';

import Input from '../../components/Input';
import Axios from 'axios';

import api from '../../services/api';

export default function Search() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories(){
      const response = await api.get("/categoria")
      setCategories(response.data)
    }
    loadCategories();
  }, [])

  return (
    <Container>
      <Input header placeholder="item ou loja" />

      <Title>Categorias</Title>
      <CategoriesList
        data={categories}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Item>
            <ItemImage source={{ uri: item.url }} />
            <ItemTitle>{item.nome}</ItemTitle>
          </Item>
        )}
      />
    </Container>
  );
}

Search.navigationOptions = {
  headerShown: false,
};
