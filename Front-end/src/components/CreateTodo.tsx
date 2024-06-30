import './CreateTodo.scss'
import { useState } from 'react'

export const CreateTodo = () => {

 const [todo, setTodo] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    console.log('submitted')
    console.log(todo)
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
