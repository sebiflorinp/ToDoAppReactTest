import { useState } from "react"

function Input(props){

  const [numeSarcina, setNumeSarcina] = useState('')

  return (
    <div className="containerInput">
      <input value={numeSarcina} onChange={e => setNumeSarcina(e.target.value)}/>
      <button onClick={() => {props.adaugareSarcina(numeSarcina), setNumeSarcina('')}}>Adaugare sarcina</button>
    </div>
  )
}

export default Input