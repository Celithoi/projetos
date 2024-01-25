import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import pegaCep from './assets/pegaCep.js';


function App() {
  const [input,setInput] = useState('');
  const [cep, setCep] = useState({});
  // http://viacep.com.br/ws/39406560/json

async function handleSearch(){
  if (input === ''){ 
    alert('por favor coloque algum CEP!');
    return;
  }

  try{
    const response = await pegaCep.get(`${input}/json`);
    setCep(response.data);
    setInput('');

    }catch{
      alert('Cep invalido/digitado errado');
      setInput("")
    }
  }
  

  return (
    <div className='container'>
      <h1 className='title'>Buscador de Cep</h1>
      
      <div className='containerInput'>
        <input type="text"
        placeholder='Digite seu cep...'
        value={input}
        onChange ={(e) => {
         setInput(e.target.value) 
        }}/>
        
        <button className='buttonSearch' onClick={handleSearch}>
          <FiSearch size="25" color='#fff'></FiSearch>
        </button>
      </div>

        {Object.keys(cep).length > 0 &&(
          <main className='main'>
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          {Object.keys(cep.complemento).length >0 && (
          <span>complemento: {cep.complemento}</span>
          )}
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
          </main>
        )}
    </div>

    
  )
}

export default App
