import React from 'react'
import styled from '@emotion/styled'

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Div>
        <DIVI>
        <PPP>El precio es de: <Span>{PRICE}</Span></PPP>
        <IMG src={`https://cryptocompare.com/${IMAGEURL}`} />
        </DIVI>
        <PP>El precio mas alto del dia: <Span>{HIGHDAY}</Span></PP>
        <PP>El precio mas bajo del dia: <Span>{LOWDAY}</Span></PP>
        <PP>Variacion ultimas 24hs: <Span>%{' '}{CHANGEPCT24HOUR}</Span></PP>
        <PP>Ultima actualizacion: <Span>{LASTUPDATE}</Span></PP>
    </Div>
  )
}

export default Resultado

const IMG = styled.img`
    width: 80px;
    height: 80px;
    margin-left: 20px;
`

const Div = styled.div`
    margin-top: 30px;
`

const PP = styled.p`
    color: white;
    margin-bottom: 20px;
    font-family:'Lat', sans-serif;
    font-weight: 500;
    font-size: 18px;
`

const Span = styled.span`
    color: #9290e9;
    margin-bottom: 20px;
    font-family:'Lat', sans-serif;
    font-weight: 700;
    font-size: 20px;
`

const PPP = styled.p`
    color: #57f36c;
    font-family:'Lat', sans-serif;
    font-weight: 500;
    font-size: 24px;
`

const DIVI = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
`