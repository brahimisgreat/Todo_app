import {useState} from 'react'
import check from '../assets/assets/check.svg'
import cross from '../assets/assets/icon-cross.svg'
import circle from '../assets/assets/circle.svg'
import './Todo.scss'

export const Todo = ({task}) => {
    const [checked, setChecked] = useState(false)

    const handleClick = () => {
        setChecked(!checked)
    }
  return (
    <div className='todo'>
        {checked ? <img src={check} alt='check' onClick={handleClick} /> : <img src={circle} onClick={handleClick} />}
        {checked ?<p className='crossOut'><s>{task}</s></p> : <p className='normal'>{task}</p>}
        <img className='x' src={cross} alt='cross' />
    </div>
  )
}
