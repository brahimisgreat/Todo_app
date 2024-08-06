import {useState, } from 'react'
import { useContext } from 'react'
import { themeContext } from './Themecontext'
import check from '../assets/assets/check.svg'
import cross from '../assets/assets/icon-cross.svg'
import circle from '../assets/assets/circle.svg'
import axios from 'axios'
import './Todo.scss'
import circleDark from '../assets/assets/Oval Copy.svg'

import PropTypes from 'prop-types';

export const Todo = ({task, ids, completed}) => {
  // Rest of the code

Todo.propTypes = {
  task: PropTypes.string.isRequired,
  ids: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
};
    const [checked, setChecked] = useState([])

    const {darkMode} = useContext(themeContext)


  
    

   
    //Marks the task as completed
    async function markComplete(id) {
       await axios.put('http://localhost:3000/completed/' + id)
        .then(res => {
          window.location.reload()
          console.log(res)
        }).catch(err => {
            console.log(err)
    })
    }

    //Handles the Delete request
    async function handleDelete(id) {
     await  axios.delete('http://localhost:3000/delete/' + id)
      .then(res=>{
        console.log(res)
        window.location.reload()
      }).catch(err=>{
        console.log(err)
      })
    }

    //Marks the task as active
    async function markActive(id) {
      setChecked(!checked)
      axios.put('http://localhost:3000/active/' + id)
      .then(res => {
        window.location.reload()

          console.log(res)
      }).catch(err => {
          console.log(err)
  })
  }


    // }
  return (
    <div className={darkMode? 'todoDark' : 'todo'}>
        {completed ?  <img className='check' src={check} alt='check' onClick={()=> markActive(ids)}  /> : <img className='circle' src={darkMode? circleDark : circle} onClick={() => markComplete(ids)} />}
        {completed ?<p className='crossOut'><s>{task}</s></p> : <p className='normal'>{task}</p>}
        <img className='x' src={cross} alt='cross' onClick={()=> handleDelete(ids)}  />
    </div>
  )
}
