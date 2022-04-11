import logo from './logo.svg';
import RoutesApp from './Container/RoutesApp';
import { createContext } from 'react';

<></> /* se hace esto para evitar hacer un div y que nos haga otro nodo */

//componente Contenedor=app

const contextApp = createContext('esto es un contexto')

function App() {


  return (

    <div className='App'>

      <RoutesApp/>

    </div>
  );

}

export default App;
