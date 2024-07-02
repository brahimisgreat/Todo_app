import './CreateTodo.scss'
import { useState } from 'react'

export const CreateTodo = () => {

 const [todo, setTodo] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
   async function createTodo(){
      try{
        const response = await fetch('http://localhost:5000/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({title: todo})
        })
        if(response.ok){
          setTodo('')
        }
      }catch(error){
        console.log(error)
      }
    
   }
    createTodo()
  }
  return (
    <div className='createTodo'>
        <form onSubmit={handleSubmit}>
            <button type='submit'><div></div></button>
            <input type='text' placeholder='Create a new todo...' value={todo} onChange={(e)=> {setTodo(e.target.value)}} />
        </form>

    </div>
  )
}
