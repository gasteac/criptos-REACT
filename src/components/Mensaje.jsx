import React from 'react'
import styled from '@emotion/styled'

const Mensaje = ({children}) => {
  return (
    <Pe>{children}</Pe>
  )
}

export default Mensaje

//------------ESTILOS------------//

const Pe = styled.h3`
    color: white;
    font-size: 20px;
    font-family:'Lat', sans-serif;
    text-align: center;
    font-weight: 600;
    background-color: red;
    padding: 10px;
    border-radius:10px;
`
