import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Image from '../images/imagen-criptos.png'
import Formulario from './components/Formulario'

function App() {
  const [monedas, setMonedas] = useState({})

  useEffect(() => {
    if (Object.keys(monedas).length > 0){
      const cotizarCripto = async ()=>{
        const {moneda, monedasCriptos} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedasCriptos}&tsyms=${moneda}`
        console.log(url)
      }
      cotizarCripto()
    }
  },[monedas])
  
  return (
    <Contenedor>
      <Imagen src={Image} alt='imagenes criptos'/>
      <div>
      <Heading>Cotiza criptomonedas al instante</Heading>
      <Formulario
      setMonedas={setMonedas}
      />
      {/* <Resultado/> */}
      </div>
    </Contenedor>
  )
}
export default App

//------------ESTILOS------------//

const Heading = styled.h1`
  font-family:'Lat', sans-serif;
  color: #FFF;
  text-align:center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 25px;
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
  max-width:900px;
  margin: 0 auto;
  width:90%;
  @media (min-width: 992px){
    display:grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 3rem;
  }
`

const Imagen = styled.img`
  max-width:400px;
  width:80%;
  margin:100px auto 0 auto;
  display: block
`


