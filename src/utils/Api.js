import Axios from 'axios';

var Api = Axios.create({
    baseURL: ''
})

export const Get = (route) => (
    Api.get(route)
)

export const Post = (route, data) => (
    Api.post(route, data)
)
