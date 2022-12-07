import './App.css'
import { CustomSelect } from './components/CustomSelect'

function App() {

  const options = [
    {
      value: 'AC',
      text: 'Acre'
    },
    {
      value: 'AL',
      text: 'Alagoas'
    },
    {
      value: 'AP',
      text: 'Amapá'
    },
    {
      value: 'AM',
      text: 'Amazonas'
    },
    {
      value: 'BA',
      text: 'Bahia'
    },
    {
      value: 'CE',
      text: 'Ceará'
    },
    {
      value: 'ES',
      text: 'Espirito Santo'
    },
    {
      value: 'GO',
      text: 'Goiás'
    },
    {
      value: 'MA',
      text: 'Maranhão'
    },
    {
      value: 'MT',
      text: 'Mato Grosso'
    },
    {
      value: 'MS',
      text: 'Mato Grosso do Sul'
    },
    {
      value: 'MG',
      text: 'Minas Gerais'
    },
    {
      value: 'PA',
      text: 'Pará'
    },
    {
      value: 'PB',
      text: 'Paraiba'
    },
    {
      value: 'PR',
      text: 'Paraná'
    },
    {
      value: 'PE',
      text: 'Pernambuco'
    },
    {
      value: 'PI',
      text: 'Piauí'
    },
    {
      value: 'RJ',
      text: 'Rio de Janeiro'
    },
    {
      value: 'RN',
      text: 'Rio Grande do Norte'
    },
    {
      value: 'RS',
      text: 'Rio Grande do Sul'
    },
    {
      value: 'RO',
      text: 'Rondônia'
    },
    {
      value: 'RR',
      text: 'Roraima'
    },
    {
      value: 'SC',
      text: 'Santa Catarina'
    },
    {
      value: 'SP',
      text: 'São Paulo'
    },
    {
      value: 'SE',
      text: 'Sergipe'
    },
    {
      value: 'TO',
      text: 'Tocantins'
    },
    {
      value: 'DF',
      text: 'Distrito Federal'
    },
  ]

  return (
    <div className="App">
      <CustomSelect label='Estado' id='states-select' options={options} />
    </div>
  )
}

export default App
