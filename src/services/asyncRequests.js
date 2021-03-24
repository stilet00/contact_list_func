const axios = require('axios')
const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts/'

export function getContacts() {
    return axios.get(URL)
}
export function deleteOne(id) {
    return axios.delete(URL + id, {
        data: {
            id: id
        }
    })
}
export function addOne(data) {
    return axios.post(URL, {
        name: data.name,
        surname: data.surname,
        phone: data.phone
    })
}
export function editOne(data) {
    return axios.put(URL + data.id, {
        id: data.id,
        name: data.name,
        surname: data.surname,
        phone: data.phone
    })
}