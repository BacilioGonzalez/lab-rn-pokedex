import React, { useEffect, useState } from 'react'
import axios from "axios"

export function useFetch<T>() {

    const [data, setData] = useState<T>()
    const [error, setError] = useState<unknown>()

    const axiosInstance = axios.create({
        baseURL: 'https://pokeapi.co/api/',
        timeout: 5000
    })

    useEffect(() => {
        const getRequest = async () => {
            try {
                const response = await axiosInstance.get<T>('v2/pokemon?limit=151')
                setData(response.data)
            } catch (error) {
                setError(error)
            }
        }

        getRequest()
    }, [])

    return { data }

}  