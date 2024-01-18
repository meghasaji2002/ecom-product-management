
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Products from './pages/Products';
import Search from './pages/Search';
import Home from './pages/Home';
import { useState } from 'react';

function App() {

const[uploadProduct,setUploadProductStatus] = useState({})

  return (
    <div className="App">
         <Header/>
        <Routes>
        <Route path='/' element={<Home/>}> </Route>
          <Route path='/products' element={<Products/>}> </Route>
           <Route path='/search' element={<Search/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
