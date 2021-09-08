
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Home from './src/Home';
import Money from './src/money';
import search from './src/search';
import notification from './src/notification';
import profile from './src/profile';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

export default function App() {
  console.log('22222')
  return (
    
    <View style={{flex: 1}}>
<NavigationContainer>
    <Tab.Navigator 
    
    screenOptions={{headerShown: false,}}
    initialRouteName={'Home'}
     tabBarOptions={{ showLabel: false }}>
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarStyle: { 
          height: 72,
        },
        tabBarIcon: ({ focused  }) => (
          
          <Image
          source={require('/Test Task/Flahmingo/Flamingo/assets/1.png')}
          />
        ),
      }}
      />
      <Tab.Screen name="search" component={Money} 
       options={{
        tabBarStyle: { 
          height: 72,
        },
        tabBarIcon: ({ focused  }) => (
          
          <Image
          source={require('/Test Task/Flahmingo/Flamingo/assets/2.png')}
          />
        ),
      }}/>
       <Tab.Screen name="Search" component={search} 
      options={{
        tabBarStyle: { 
          height: 72,
        },
        tabBarIcon: ({ focused  }) => (
          
          <Image
          source={require('/Test Task/Flahmingo/Flamingo/assets/3.png')}
          />
        ),
      }}
      />
       <Tab.Screen name="notification" component={notification} 
      options={{
        tabBarStyle: { 
          height: 72,
        },
        tabBarIcon: ({ focused  }) => (
          
          <Image
          source={require('/Test Task/Flahmingo/Flamingo/assets/4.png')}
          />
        ),
      }}
      />
       <Tab.Screen name="profile" component={profile} 
      options={{
        tabBarStyle: { 
          height: 72,
        },
        tabBarIcon: ({ focused  }) => (
          
          <Image
          source={require('/Test Task/Flahmingo/Flamingo/assets/5.png')}
          />
        ),
      }}
      />
    </Tab.Navigator>
    
    </NavigationContainer>
    </View>
     
  );
}