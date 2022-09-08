import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { primaryColor } from './src/config/stylesColors';

import { Login } from './src/pages/login';
import { NewUser } from './src/pages/login/newUser';
import { Menu } from './src/pages/menu';
import { Maps } from './src/pages/maps';
import { Pets } from './src/pages/pets';
import { NewPets } from './src/pages/pets/newPets';
import { DetalhesPets } from './src/pages/pets/detalhesPets';
import { Vacs } from './src/pages/vacs';

import { AuthProvider } from './src/contexts/auth';
import { NewVac } from './src/pages/vacs/newVac';
import { Meds } from './src/pages/meds';
import { NewMed } from './src/pages/meds/newMeds';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Login'}>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
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
            options={{ headerShown: false }}
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
            name='NewPets'
            component={NewPets}
            options={{
              title: "Novo Pet",
              headerTintColor: primaryColor,
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name='DetalhesPets'
            component={DetalhesPets}
            options={{
              title: "Detalhes",
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
          <Stack.Screen
            name='Vacs'
            component={Vacs}
            options={{
              title: "Vacinas",
              headerTintColor: primaryColor,
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name='NewVac'
            component={NewVac}
            options={{
              title: "Vacina",
              headerTintColor: primaryColor,
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name='Meds'
            component={Meds}
            options={{
              title: "Medicamentos",
              headerTintColor: primaryColor,
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name='NewMed'
            component={NewMed}
            options={{
              title: "Medicamento",
              headerTintColor: primaryColor,
              headerTitleAlign: "center",
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;