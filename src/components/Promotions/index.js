import React, { useState, useEffect } from 'react';

import { withNavigation } from 'react-navigation';
import { PromoList, Item, PromoImage } from './styles';
import api from '../../services/api';

function Promotions({ navigation }) {
  
  const [promotions, setPromotions] = useState([])
  // https://api.ifome.net/api/promocoes/get
  useEffect(() => {
    fetch("https://api.ifome.net/api/promocoes/get")
    .then( res => res.json())
    .then((data) =>{
      setPromotions(data)
    })
  }, [])

  function handleNavigate(promo) {
    navigation.navigate('Trending', { promo });
  }

  return (
    <PromoList horizontal>
      {promotions.map(promo => (
        <Item key={promo.id} >
          <PromoImage source={{ uri: promo.url }} />
        </Item>
      ))}
    </PromoList>
  );
}

export default withNavigation(Promotions);
