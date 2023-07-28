import React from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { usePokemonContext } from '../context/pokemonContext'
import { useFetch } from '../hooks/useFetch'
import { PokemonResponse } from '../interfaces/PokemonAPIInterface'

const Home = () => {

    const { pokemonList } = usePokemonContext()
    const { data } = useFetch<PokemonResponse>()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                style={{ flex: 1 }}
                data={data?.results}
                renderItem={(({item}) => <Text>{item.name}</Text>)}
            />
        </SafeAreaView>
    )
}

export default Home