import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';


export function HomeScreen({navigation}) {
  return (
 <View style={styles.container}>
    <Text> Configurações do App</Text>
    <RectButton>
      <Text/>
    </RectButton>
    </View>
  
  )
}

export function ProfileScreen({navigation}) {
  return(
   
     <View style={styles.container}>
       <Text> Deseja sair</Text>
    <RectButton>
     <Text/>
    </RectButton>
   
    </View>

  )
  
}

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Configurações" component={HomeScreen}/>
        <Drawer.Screen name="Sair" component={ProfileScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});