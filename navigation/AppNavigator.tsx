import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { RootNavigationList } from '../App'
import Home from '../src/screens/Home'
import PokemonDetail from '../src/screens/PokemonDetail'
import AddPokemon from '../src/screens/AddPokemon'

const Stack = createStackNavigator<RootNavigationList>()

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='PokemonDetail' component={PokemonDetail} />
            <Stack.Screen name='AddPokemon' component={AddPokemon} />
        </Stack.Navigator>
    )
}

export default AppNavigator