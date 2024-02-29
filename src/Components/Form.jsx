
import {useState} from "react"

const btnStyle = {backgroundColor: '#33d2feaa'}

const Form = () => {
  const [name, setName] = useState ('')
  const [age, setAge] = useState ('')
  const [animal, setAnimal] = useState ('')
  const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        const numRegex = /[0-9]/
        if(name.length>3 && numRegex.text(age) && animal.length>=4){
          setShow(true)
          setErr(false)  
        } else {
            setErr(true)

        }
    }
  return (
    <div> <h2 style={{color: 'red'}}>Ingresa tu animal Favorito</h2>
        {show ? null : 
            <form onSubmit={handleSubmit}>
                    <label>Nombre:</label>
                    <input type="text" onChange={(event) => setName(event.target.value)} />
                    <label>Edad:</label>
                    <input type= "text" onChange={(event) => setAge(event.target.value)}/>
                    <label>Animal Favorito:</label>
                    <input type= "text" onChange={(event) => setAnimal(event.target.value)}/>
                    <button style={btnStyle} >Enviar</button>
            </form>
     }

    {show ? 
        <>
         <h3>Genial, {name}!</h3>
         <h3>Ya sabemos que tu animal favorito es {animal}</h3>
        </> 
        : 'Colocá tu nombre, edad y tu animal Favorito'}
        
    {err ? <h4 style= {{color: 'blue'}}>Debe ingresar los datos correctamente</h4> : null}
      
    </div>
  )
}
export default Form