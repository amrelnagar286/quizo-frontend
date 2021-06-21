import axios from 'axios'
const api = axios.create({
    baseURL: 'https://quizo.yousefpro.com/api'
})

const token = '050cd840b092533115b1d5b3042e00e4eaca2683'

export {
    api,
    token
}