import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import productos from '../Item/Item';

function ItemDetail () { 

  const {name} = useParams();
  
 
  return (
    
      //useparam para detalleid
    <>
      <div className="card-header d-flex justify-content-center">
        {
          productos
          .filter((producto) => producto.name === name)
            .map((producto) => (
              <div key={producto.ID}>
              <h2>{producto.modelo}</h2>
              
              </div>
            ))
        }
      </div>

    
    </>

  )

}

export default ItemDetail