
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import SingleProduct from './pages/SingleProduct'
import Home from './pages/Home';
import About from './pages/About'
import Products from './pages/Products';
import Navbar from './components/Navbar';
import CartConainer from './pages/CartContainer';


function App() {
  return  (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='detail/:paramId' element={<SingleProduct/>} />
        <Route path='about' element={<About/>} />
        <Route path='products' element={<Products/>} />
        <Route path='cartContain' element={<CartConainer/>} />

      
    </Routes>
    </BrowserRouter>
    

  )
}


export default App;