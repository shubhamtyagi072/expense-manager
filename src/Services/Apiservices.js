import axios from "axios";
import get from 'lodash/get'

export const login = async ({requestBody}) => {
    try {
        const result = await axios.post(`http://localhost:4000/api/v1/login`,requestBody)
        return get(result,'data')
    }catch(err){
        return(err)
    }
}

export const expense = async ({requestBody}) => {
    try {
        const result = await axios.post(`http://localhost:4000/api/v1/login`,requestBody)
        return get(result,'data')
    }catch(err){
        return(err)
    }
}