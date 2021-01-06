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
import AsyncStorage from '@react-native-async-storage/async-storage';

function Person() {
  const [profile, setProfile] = useState({});
  const [nome, setNome] = useState([])

  useEffect(() => {
    async function loadProfile() {
      const usuarioLogado = await AsyncStorage.getItem('usuarioLogado');
      const nomeUSuario = await setNome(usuarioLogado);
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
          <Name>{nome}</Name>
          <Message>Editar perfil</Message>
        </Info>
        <MaterialIcons name="keyboard-arrow-right" size={20} color="#999999" />
      </ProfileButton>
    </Container>
  );
}

export default withNavigation(Person);
