import axios from 'axios'

const ROUTES = {
    breeds: 'breeds'
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

export const listAllCats = async () => {
    let cats = {}
    try {
        const { data } = await axiosClient.get(getAPIRoute() + ROUTES.breeds)           
        cats = data     
    } catch {
        cats = {}
    } finally {
        return cats
    }
}