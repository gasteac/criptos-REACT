import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Image from '../images/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'

function App() {
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})

  useEffect(() => {
    if (Object.keys(monedas).length > 0){
      const cotizarCripto = async ()=>{
        const {moneda, monedasCriptos} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedasCriptos}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado1 = await respuesta.json()
        setResultado(resultado1.DISPLAY[monedasCriptos][moneda])
      }
      cotizarCripto()
    }
  },[monedas])
  
  return (
    <Contenedor>
      <Div>
      <Heading>Cotiza criptomonedas al instante</Heading>
      <Formulario
      setMonedas={setMonedas}
      />
      {resultado.PRICE && <Resultado resultado={resultado}/>}
      </Div>
      <Imagen src={Image} alt='imagenes criptos'/>
    </Contenedor>
  )
}
export default App

//------------ESTILOS------------//

const Div = styled.div`
  max-width:500px;
  width:100%;
`

const Heading = styled.h1`
  font-family:'Lat', sans-serif;
  color: #FFF;
  text-align:center;
  font-weight: 700;
  font-size: 26px;
  &::after{
    content: '';
    width: 80%;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`
const Contenedor = styled.div`

  width:70%;
  margin: 100px auto;
  @media (min-width: 992px){
    display:grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 3rem;
  }
`

const Imagen = styled.img`
  max-width:500px;
  width:100%;
`


