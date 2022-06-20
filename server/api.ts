import url from 'url'
import axios from 'axios'
import { Breed } from '../types'

const ROUTES = {
    breeds: 'breeds',
    search: 'breeds/search'
}

const getAPIRoute = (): string => {
    if (typeof(process.env.CAT_API_ROUTE) === "string") {
        return process.env.CAT_API_ROUTE
    }
    return ""
}

const getEnvKey = (key: string | undefined): string => {
    if (typeof(key) === "string") {
        return key
    }
    return ""
}

const axiosClient = axios.create({
    baseURL: getAPIRoute(),
    headers: {'x-api-key': getEnvKey(process.env.CAT_API_KEY)}
})

export const listAllBreeds = async () => {
    let breeds = {}
    try {
        const { data } = await axiosClient.get(getAPIRoute() + ROUTES.breeds)
        breeds = data     
    } catch (err) {
        breeds = {}
    } finally {
        return breeds
    }
}

export const getBreedById = async (breedID: string) => {
    let breed: Breed = {}
    try {
        const { data }: {data: Array<Breed>} = await axiosClient.get(getAPIRoute() + ROUTES.search, {
            params: {
                q: breedID
            }
        })
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === breedID) {
                breed = data[i]
                break
            }
        }
    } catch (err) {
        breed = {}
    } finally {
        return breed
    }
}