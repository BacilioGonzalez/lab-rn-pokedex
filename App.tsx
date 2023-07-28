/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { PokemonContextProvider } from './src/context/pokemonContext';

export type RootNavigationList = {
  Home: undefined,
  PokemonDetail: undefined,
  AddPokemon: undefined
}

function App(): JSX.Element {
  return (
    <PokemonContextProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PokemonContextProvider>
  );
}

export default App;
