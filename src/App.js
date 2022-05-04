
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Shared/Header/Header'


import Home from './component/Home-Pages/Home/Home';
import Inventory from './component/Home-Pages/Inventory/Inventory';
import Footer from './component/Shared/Footer/Footer';
import NotFound from './component/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
