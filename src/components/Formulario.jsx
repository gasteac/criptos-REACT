import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Mensaje from './Mensaje'

const Formulario = ({setMonedas}) => {
  const monedas = [
    {id: 'USD', nombre: 'Dolar de Estados Unidos'},
    {id: 'MXN', nombre: 'Peso Mexicano'},
    {id: 'EUR', nombre: 'Euro'},
    {id: 'GBP', nombre: 'Libra Esterlina'}]

    useEffect(() => {
      const consultarAPI = async ()=>{
          const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD"
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()
          const arrayCriptos = resultado.Data.map(cripto => {
            const objeto = {
              id:cripto.CoinInfo.Name,
              nombre:cripto.CoinInfo.FullName
            }
            return objeto
        })
        SetCriptos(arrayCriptos)
      }
      consultarAPI();
    }, [])

    const [mensaje, setMensaje] = useState(false)
    const [criptos, SetCriptos] = useState([])
    const [moneda, SelectMonedas] = useSelectMonedas('Elije tu moneda', monedas)
    const [monedasCriptos, SelectMonedasCriptos] = useSelectMonedas('Elije tu criptomoneda', criptos)

  
   

  const handleSubmit = e =>{
    e.preventDefault()
    if ([moneda, monedasCriptos].includes('')){
      setMensaje(true)
      return;
    } 
    setMensaje(false)
    setMonedas({moneda, monedasCriptos})
  }
  

  return (
    <form
    onSubmit={handleSubmit}
    >
      {mensaje && <Mensaje>Selecciona las 2 opciones</Mensaje>}
      <SelectMonedas/>
      <SelectMonedasCriptos/>
      <InputSubmit 
      type='submit'
      value='Cotizar'
      />
    </form>
  )
}

export default Formulario

//------------ESTILOS------------//

const InputSubmit = styled.input`
  margin-top: 25px;
  width: 100%;
  background-color: #9497FF;
  border: none;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .2s ease;
  &:hover{
    background-color: #7a7dfe;
    cursor: pointer;
  }
`