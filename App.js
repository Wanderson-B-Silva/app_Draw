import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/Telas/Home';
import Catalogo from './src/Telas/Catalogo';
import Comparar from './src/Telas/Comparar';
import Configuracoes from './src/Telas/Configuracoes';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} options={{ title: 'Início' }} />
        <Drawer.Screen name="Catalogo" component={Catalogo} options={{ title: 'Catálogo' }} />
        <Drawer.Screen name="Comparar" component={Comparar} options={{ title: 'Comparar' }} />
        <Drawer.Screen name="Configuracoes" component={Configuracoes} options={{ title: 'Configurações' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;