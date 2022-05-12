const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

const axios = require('axios').default

function getCountry(country){
    return axios.get(`${path}/${country}`, headers)
    .then((response) => response.json())
}

export default (
    getCountry
)