import axios from 'axios';


const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://sclub.in.ua/actions/all/page/0/100',
    // baseURL: 'https://neko-back.herokuapp.com/2.0',
    headers: {}
})

export const API = {
    getCards(params: any) {
        return instance.get('', {params})
            .then(response => {
                console.log(response.data.entities)
                return response.data.entities
            })
    }
}



