import axios from "axios"

export type invokeAPIType1 = {
    method: 'get' | 'post' | 'patch' | 'put' | 'delete',
    path: string
}

export type invokeAPIType2 = {
    subPath?: string | null,
    params?: any | null,
    data?: any | null
}

const invokeAPI = ({method, path}:invokeAPIType1) => ({subPath = null, params = null, data = null}:invokeAPIType2) => {
    return axios({
        method,
        url: subPath ? `${path}${subPath}` : `${path}`,
        params,
        data
    })
}

export default invokeAPI;