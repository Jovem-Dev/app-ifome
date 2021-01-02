import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { SuggestionList, Item, SuggestionImage, Title } from './styles';
import Axios from 'axios';

export default function Suggestions() {

  const [suggestions, setSuggestions] = useState([])
  //http://api.ifome.net/api/sugestoes/get
  useEffect(() => {
    async function loadSugestoes(){
      const response = await api.get("/sugestoes")
      setSuggestions(response.data)
    }
    loadSugestoes();
  }, [])

  return (
    <SuggestionList horizontal>
      {suggestions.map(suggestion => (
        <Item key={suggestion.id}>
          <SuggestionImage source={{ uri: suggestion.url }} />
          <Title>{suggestion.nome}</Title>
        </Item>
      ))}
    </SuggestionList>
  );
}
