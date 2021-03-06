import productos from '../Item/Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Link } from 'react-router-dom';



function ItemList() {
  
  return (
    
    <>

    { productos.map ((producto) => <div key={producto.ID} className='col-md-4 p-1'>

                                      <div className="card-w-100 mt-5 ">

                                            <div className="card-header d-flex justify-content-center">

                                              <h2>{`${producto.modelo}`}</h2>

                                            </div>

                                            <div className="card-body d-flex justify-content-center ">

                                              <img src={producto.img} alt="" />

                                            </div>

                                            <div className='d-flex justify-content-center'>

                                              <Link to={`/detalle/${producto.name}`}><button className='btn-primay bg-secondary'> Detalle </button></Link>
                                            
                                            </div>

                                      </div>

                                    </div> )}
                                    
    </>   

  )
}

export default ItemList