import React, { useState, useEffect } from 'react';

import { withNavigation } from 'react-navigation';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Avatar,
  Info,
  Name,
  Message,
  ProfileButton,
} from './styles';

import api from '../../../services/api';
import fotoDePerfil from '../../../assets/fotoPerfil.jpg';

function Person() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function loadProfile() {
      const response = await api.get('profile');
      setProfile(response.data);
    }
    loadProfile();
  }, []);
 
  return (
    <Container>
      <ProfileButton>
        <Avatar source={fotoDePerfil} />
        <Info>
          <Name>Gustavo Noronha</Name>
          <Message>Editar perfil</Message>
        </Info>
        <MaterialIcons name="keyboard-arrow-right" size={20} color="#999999" />
      </ProfileButton>
    </Container>
  );
}

export default withNavigation(Person);
