import axios from "../node_modules/axios/index"
const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}


function getCountry(country) {
    return axios.get(`${path}/${country}`, headers)
        .then((response) => response.data)
}

export default {
    getCountry
}