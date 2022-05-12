import React, { memo, useState, useEffect, useCallback } from "react";
import Api from '../../api.js'
import { ContainerStyled } from './style'
import Board from './components/Board'

function Main(){
    const[data, setData] = useState({})
    const [country, setCountry] = useState('brazil')

    const getCovidData = useCallback((country)=>{
        Api.getCountry(country)
        .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    return(
        <ContainerStyled>
            <div className="mb-2">

            </div>
            <Board data={data} />
        </ContainerStyled>
    )
}

export default memo(Main)
