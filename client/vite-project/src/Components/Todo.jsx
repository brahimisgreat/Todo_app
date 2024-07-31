import {useState} from 'react'
import check from '../assets/assets/check.svg'
import cross from '../assets/assets/icon-cross.svg'
import circle from '../assets/assets/circle.svg'
import axios from 'axios'
import './Todo.scss'

export const Todo = ({task, ids}) => {
    const [checked, setChecked] = useState(false)

    const handleClick = () => {
        setChecked(!checked)
    }

    async function handleDelete(id) {
     await  axios.delete('http://localhost:3000/delete/' + id)
      .then(res=>{
        console.log(res)
        window.location.reload()
      }).catch(err=>{
        console.log(err)
      })
    }


    // }
  return (
    <div className='todo'>
        {checked ?  <img className='check' src={check} alt='check' onClick={handleClick} /> : <img className='circle' src={circle} onClick={handleClick} />}
        {checked ?<p className='crossOut'><s>{task}</s></p> : <p className='normal'>{task}</p>}
        <img className='x' src={cross} alt='cross' onClick={()=> handleDelete(ids)}  />
    </div>
  )
}
