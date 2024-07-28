import React from 'react'
import todo from '../assets/assets/todo.svg'
import moon from '../assets/assets/icon-moon.svg'

export const Header = () => {
  return (
    <header>
    <img src={todo} alt="todo" />
    <img src={moon} alt="moon" />
    </header>
  )
}
