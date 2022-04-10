import React, { useState } from 'react';
import detalle from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';
import Cambiabilidad from '../ItemCount/ItemCount';
import ItemDetail from '../ItemDetail/ItemDetail'



function ItemDetailContainer() {


  const inputHandler = (event)=>{

    //evt.preventDefault()
    console.log (event.nativeEvent)
   
  }
 
  
  return (
    
    <>
      <div className='border border-3 border-primary'>

        <ItemDetail  />

      </div>


    </>

  )

}

export default ItemDetailContainer