import { useState, useEffect } from "react"
import cross from '../assets/images/icon-cross.svg'

import './List.scss'

export const List = () => {
  const [list, setList] = useState<{ Task: string, todo_id:number }[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/read')
    .then(response => response.json())
    .then(data => {
      setList(data);
      console.log(data);
    })
  }, [])

  


  return (
    <div className='list'>
      {list.map((e)=>{
        return <div key={e.id} >{e.task} <img  src={cross} /> </div>
      })}
      
    </div>
  )
}
