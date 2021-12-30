import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})

export const requestsAPI: RequestsAPIType = {
    post(data: any) {
        return instance.post<string, AxiosResponse>(`auth/test`,{success: data})
    }
}
type RequestsAPIType = {
    post: (data: any) => Promise<any>
}