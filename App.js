// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { primaryColor } from './src/config/stylesColors';
import { LogBox } from 'react-native';

import { Login } from './src/pages/login';
import { NewUser } from './src/pages/login/newUser';
import { Menu } from './src/pages/menu';
import { Maps } from './src/pages/maps';
import { Responsible } from './src/pages/responsible';
import { Pets } from './src/pages/pets';
import { NewResponsible } from './src/pages/responsible/newResponsible';


const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen  
          name='Login'
          component={Login}
          options={{ headerShown:false}}
        />
        <Stack.Screen  
          name='NewUser'
          component={NewUser}
          options={{ 
            title: "Novo Usuário", 
            headerTintColor: primaryColor,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen  
          name='Menu'
          component={Menu}
          options={{ headerShown:false}}
        />
        <Stack.Screen  
          name='Responsible'
          component={Responsible}
          options={{ 
            title: "Responsável", 
            headerTintColor: primaryColor,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen  
          name='newResponsible'
          component={NewResponsible}
          options={{ 
            title: "Editar Responsável", 
            headerTintColor: primaryColor,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen  
          name='Pets'
          component={Pets}
          options={{ 
            title: "Meus Pets", 
            headerTintColor: primaryColor,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen  
          name='Maps'
          component={Maps}
          options={{ 
            title: "Search Vets", 
            headerTintColor: primaryColor,
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;