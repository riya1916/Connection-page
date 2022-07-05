import React from 'react'
import "./SearchConn.css"
import { RiAccountCircleFill } from "react-icons/ri"


function SearchConn({name, designation, address}) {
  return (
    <div className='connection' >
        <RiAccountCircleFill />
        <div className="connection_info">
        <h2 className='name'>{name}</h2>
        <h4 className='designation'>{designation}</h4>
        <h4 className='address'>{address}</h4>
        <button className='connectButton' type='submit'>Connect</button>
      
        </div>
       
        
        
        
    </div>
  )
}

export default SearchConn