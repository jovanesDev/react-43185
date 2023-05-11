import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

const Item = (props) => {
  const {id,titulo,descripcion} = props;
  const navigate = useNavigate()
  return (
    <div className='d-flex flex-column w-25 h-25 border border-dark mx-2'>
        <h3 className='fs-5'>{titulo}</h3>
        <p className='fs-6'>{descripcion}</p>
        {/* <Link to={`/item/${id}`} className='btn btn-warning' >Ver Mas</Link> */}
        <button onClick={()=>navigate(`/item/${id}`)}>Ver mas</button>
    </div>
  )
}

export default Item