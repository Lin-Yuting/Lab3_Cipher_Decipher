import { useState } from 'react'
import './App.css'
import CryptoJS from 'crypto-js'

function App() {
  const [textoOriginal, setTextoOriginal] = useState('');
  const [textoCifrado, setTextoCifrado] = useState('');
  const [textoDescifrado, setTextoDescifrado] = useState('');

  const cifrar = (texto) => {
    const encriptado = CryptoJS.AES.encrypt(texto, '12345678').toString();
    return encriptado;
  }

  const descifrar = (texto) => {
    const bytes = CryptoJS.AES.decrypt(texto, '12345678');
    const desencriptado = bytes.toString(CryptoJS.enc.Utf8);
    return desencriptado;
  }

  const handleCifrar = (e) => {
    e.preventDefault();
    const cifrado = cifrar(textoOriginal);
    setTextoCifrado(cifrado);
    setTextoDescifrado('');
  }

  const handleDescifrar = (e) => {
    e.preventDefault();
    const descifrado = descifrar(textoCifrado);
    setTextoDescifrado(descifrado);
  }

  return (
    <div className='App'>
      <h1>Formulario de Cifrado y Descifrado</h1>
      <form>

        <div>
          <label htmlFor="inputTexto">Ingrese el texto:</label>
          <input 
            type="text" 
            id="inputTexto" 
            value={textoOriginal}
            onChange={(e) => setTextoOriginal(e.target.value)}
          />
        </div>

        <div>
          <button onClick={handleCifrar}>Cifrar Texto</button>
        </div>

        <div>
          <p>Texto Cifrado: {textoCifrado}</p>
        </div>

        <div>
          <button onClick={handleDescifrar} disabled={!textoCifrado}>Descifrar Texto</button>
        </div>

        <div>
          <p>Texto Descifrado: {textoDescifrado}</p>
        </div>
      </form>
    </div>
  )
}

export default App;

