import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { SuggestionList, Item, SuggestionImage, Title } from './styles';
import Axios from 'axios';

export default function Suggestions() {

  const [suggestions, setSuggestions] = useState([])

  useEffect(() =>{
    api.get('api/sugestoes/get').then((response)=>{
      setSuggestions(response.data)
    })
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
