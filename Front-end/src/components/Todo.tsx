import check from '../assets/images/Group 4 (1).svg'
import circle from '../assets/images/circle.svg'
import cross from '../assets/images/icon-cross.svg'
import './Todo.scss'


export const Todo = ({checked,setChecked}: {checked: boolean, setChecked: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const handleClick = () => {
        setChecked(!checked)
    }

  return (
    <div className='todo'>
        {checked ? <div onClick={handleClick}><img src={check}  alt='checked circle'/></div> :  <div onClick={handleClick}><img src={circle}  alt='Unchecked circle'/></div>}
        {checked ? <h3 className='H-checked'>{'buy milk'}</h3> : <h3 className='H-unchecked'>{'buy milk'}</h3>}
        <img src={cross} alt='cross' />
    </div>
  )
}
