import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(response => response.data)
        .catch(error => console.log( 'error while getting',error))
}

const addPerson = (newPerson) => {
    return axios
        .post(baseUrl, newPerson)
        .then(response => response.data)
        .catch(error => console.log( 'error while posting',error))
}

const deletePerson = (id) => {
    return axios
        .delete(baseUrl.concat(`/${id}`))
        .then(response =>{ 
            console.log(response)
            return response.data})
        .catch(error => console.log('error while deleting', error))
}



export default {getAll, addPerson, deletePerson}