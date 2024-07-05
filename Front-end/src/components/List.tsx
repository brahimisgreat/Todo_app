import { useState, useEffect } from "react";
import cross from "../assets/images/icon-cross.svg";
import circle from "../assets/images/circle.svg";

import "./List.scss";

export const List = () => {
  const [list, setList] = useState<{ Task: string; todo_id: number }[]>([]);
  const [items, setItems] = useState<number>(0);

  useEffect(() => {
    fetch("http://localhost:5000/read")
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        console.log(data);
        setItems(data.length);
      });
  }, []);

  return (
    <div className="list">
      {list.map((e) => {
        return (
          <div  className='taskbox' key={e.id}>
            <img src={circle} />
            <p>
              {e.task} 
            </p>
              <img className="cross" src={cross} />
          </div>
        );
      })}
      <div className="itemleft">
        <p>{items} items left</p>
        <button>Clear completed</button>
      </div>
    </div>
  );
};
