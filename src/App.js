
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Shared/Header/Header'


import Home from './component/Home-Pages/Home/Home';
import Inventory from './component/Home-Pages/Inventory/Inventory';
import Footer from './component/Shared/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import LogIn from './component/Page/LogIn/LogIn';
import Register from './component/Page/Register/Register';
import Blog from './component/Page/Blog/Blog';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
