import './App.css'
import { CustomSelect } from './components/CustomSelect/CustomSelect'
import { LoadingOverlay } from './components/LoadingOverlay/LoadingOverlay';

import axios from 'axios';
import { useState } from 'react';
import { IState } from './types/IState';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([{
    value: '',
    text: 'Escolha um estado'
  }]);

  const fallbackOptions = [
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

  async function handleFormButtonClick() {
    try {
      setIsLoading(true);

      const { data } = await axios.get<IState[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
      
      const stateOptions = data.map(state => {
        return {
          value: state.sigla,
          text: state.nome
        }
      })

      stateOptions.sort(function(a, b) {
        var textA = a.text.toLowerCase();
        var textB = b.text.toLowerCase();

        return (textA < textB) ? -1 : (textA > textB) ? 0 : 1;
      });

      setOptions(stateOptions)
    } catch (error) {
      setOptions(fallbackOptions);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='App'>
      <div className='form'>
        <header className='formHeader'>
          <h1>
            Qual seu estado?
          </h1>
        </header>
        <div className="formRow">
          <LoadingOverlay
            isLoading={isLoading}
            children={
              <CustomSelect
                id='states-select'
                label='Estado'
                options={options}
              />
            }
          />      
        </div>
        <div className="formRow">
          <button className='formButton' onClick={handleFormButtonClick}>
            Carregar Estados
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
