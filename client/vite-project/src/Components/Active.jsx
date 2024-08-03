import React from 'react'
import './Active.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Todo } from './Todo'
import { themeContext } from './Themecontext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export const Active = () => {
const [active, setActive] = useState([]);
const [items, setItems] = useState(0);

const {darkMode} = useContext(themeContext)

useEffect(() => {
  axios.get('http://localhost:3000/allActive')
  .then(res => {
    setActive(res.data)
    setItems(res.data.length)
  }).catch(err => {
    console.log(err)
  })
}, [active])

  return (
    <div className="list">
    <div className="tasks">
      {active.map((todo) => {
        return (
          <div key={todo.id}>
            <Todo task={todo.item} ids={todo.id}  completed={todo.completed}/>
          </div>
        );
      })}
    </div>
    <div className={darkMode ? "itemsDark" : "items"}>
      <p>{items} items left</p>
      <div className='links'>
        <Link to="/">All</Link>
        <Link to="/active">Active</Link>
        <Link to="/completed">Completed</Link>
      </div>
      <button>Clear Completed</button>
    </div>
  </div>
  )
}
