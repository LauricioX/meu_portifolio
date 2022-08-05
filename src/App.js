import { Nav } from "./componentes/nav";
import  Global from "./GlobalStyle";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Sobre } from './pages/sobre';
import Foto from "./assets/img/lauricio.jpg";

function App() {

  const flexContainer = {
    display:"flex"
  }
  return (
    <div style={flexContainer}>
      <Nav Foto={Foto}/>
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sobre' element={<Sobre/>}/>
     </Routes>


      <Global/>
    </div>

  );
}

export default App;