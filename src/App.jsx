import Input from "./components/Input"
import Sarcina from './components/Sarcina'

import { useState } from "react"

function App(){
  const [sarcini, setSarcini] = useState([])

  function adaugareSarcina(numeSarcina){
    setSarcini([...sarcini, numeSarcina])
  }

  function eliminareSarcina(numeSarcina){
    setSarcini(sarcini.filter((sarcina) => {return numeSarcina != sarcina}))
  }

  const listaSarcini = sarcini.map( (sarcina) => 
    <Sarcina key={sarcina} numeSarcina={sarcina} eliminareSarcina={eliminareSarcina}/>
  )

  return(
    <div className="containerAplicatie">
      <p className="labelTitlu">To do:</p>
      <Input adaugareSarcina={adaugareSarcina}/>
      <div className="containerSarcini">
        {listaSarcini}
      </div>
    </div>
  )
}

export default App