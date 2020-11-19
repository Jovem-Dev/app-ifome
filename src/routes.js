import React from 'react';
import { createAppContainer } from 'react-navigation'; //container

import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { MaterialIcons } from '@expo/vector-icons';

import Dashboard from './pages/Dashboard';
// import Delivery from './pages/Delivery';
import Search from './pages/Search';
import PrevRequests from './pages/PrevRequests';
import Requests from './pages/Requests';
import Profile from './pages/Profile';
import Wallet from './pages/Wallet';
import Item from './pages/Item';
import Trending from './pages/Trending';
import BuyPage from './pages/BuyPage';
import Modal from './components/Modal';
import PagamentoPage from './pages/PagamentoPage';
import EnderecoPage from './pages/EnderecoPage';
import PagamentoInsert from './pages/PagamentoInsert';
import EnderecoInsert from './pages/EnderecoInsert';
import PedidoPage from './pages/PedidoPage';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      
      Início: {
        screen: createStackNavigator(
          {
            Dashboard,
            Wallet,
            Item,
            Trending,
            PedidoPage
            
          },
          {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="home" size={30} color={tintColor} />
              ),
            },
          }
        ),
      },
      Busca: {
        screen: createStackNavigator(
          {
            Search,
          },
          {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="search" size={30} color={tintColor} />
              ),
            },
          }
        ),
      },
      Pedidos: {
        screen: createStackNavigator(
          {
            Pedidos: {
              screen: createMaterialTopTabNavigator(
                {
                  PrevRequests,
                  Requests,
                 
                },
                {
                  navigationOptions: {
                    title: 'PEDIDOS',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                      color: '#333',
                    },
                    headerStyle: {
                      shadowRadius: 0,
                      shadowOffset: { height: 0 },
                    },
                  },
                  tabBarOptions: {
                    labelStyle: {
                      color: '#333',
                      fontWeight: 'bold',
                    },
                    style: {
                      backgroundColor: '#fff',
                    },
                    indicatorStyle: {
                      backgroundColor: 'red',
                    },
                  },
                }
              ),
            },
          },
          {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="assignment" size={30} color={tintColor} />
              ),
            },
          }
        ),
      },
      Perfil: {
        screen: createStackNavigator(
          {
            Profile,
            Wallet,
            BuyPage,
            EnderecoPage,
            PagamentoPage,
            PagamentoInsert,
            EnderecoInsert,
            Modal
          },
          {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="person" size={30} color={tintColor} />
              ),
            },
          }
        ),
      },
    },
    {
      tabBarOptions: {
        activeTintColor: '#333',
        inactiveTintColor: 'gray',
      },
    }
  )
);

export default Routes;
