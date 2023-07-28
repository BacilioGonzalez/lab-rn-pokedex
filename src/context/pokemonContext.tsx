import { ReactNode, createContext, useContext, useReducer } from 'react'
import PokemonReducer from './pokemonReducer'

export interface State {
    pokemonList: any[]
}

export interface Action {
    payload: any,
    type: string
}

const pokemonInitialState: State = {
    pokemonList: []
}

const PokemonContext = createContext(pokemonInitialState)

export const usePokemonContext = () => {

    const context = useContext(PokemonContext)

    if (!context)
        throw new Error('This context can only be used in PokemonContext children')

    return context
}

export const PokemonContextProvider = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(PokemonReducer, pokemonInitialState)

    return (
        <PokemonContext.Provider value={{
            pokemonList: state.pokemonList
        }}>
            {children}
        </PokemonContext.Provider>
    )
}