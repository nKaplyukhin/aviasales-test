import * as axios from 'axios';

let instance =  axios.create({
    baseURL: `https://front-test.beta.aviasales.ru/`
})

export const ticketsAxios = {
    getTickets: (searchId) => {
        return instance.get(`tickets?searchId=${searchId}`)
    },
    getSearchId: () => {
        return instance.get(`search `)
            .then(response => response.data)
    }
}