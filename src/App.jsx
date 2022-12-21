import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

export function App() {
  const [aumentar,setAumentar] = useState(0);

  return (
      <div>
        <button onClick={()=>setAumentar(aumentar+1)}>aumenta</button>
        <button onClick={()=> aumentar !== 0 ? setAumentar(aumentar-1): null}>Diminui</button>

        <h1>{aumentar}</h1>
      </div>
  )
}

export default App
