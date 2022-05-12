import React, { memo, useState, useEffect, useCallback } from "react";
import Api from '../../api.js'

function Main(){
    const[data, setData] = useState({})
    const [country, setCountry] = useState('brazil')

    const getCovidData = useCallback((country)=>{
        Api.getCountry(country)
        .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData])

    return(
        <div>
            Teste
        </div>
    )
}

export default memo(Main)
