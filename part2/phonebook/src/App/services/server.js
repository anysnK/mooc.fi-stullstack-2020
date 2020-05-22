import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addPerson = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deletePerson = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const updateNumber = (person, newNumber) => {
    const newPerson = {name:person.name, number:newNumber, id:person.id}
    const request = axios.put(`${baseUrl}/${person.id}`, newPerson)
    return request.then(response => response.data)
}

export default { getAll, addPerson, deletePerson, updateNumber }