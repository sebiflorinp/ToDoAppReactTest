function Sarcina({numeSarcina, eliminareSarcina}){
  return (
    <div className="containerSarcina">
      <p>{numeSarcina}</p>
      <button onClick={() => eliminareSarcina(numeSarcina)}>X</button>
    </div>
  )
}

export default Sarcina