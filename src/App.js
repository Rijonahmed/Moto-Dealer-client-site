
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
import Update from './component/Page/Update/Update';
import RequireAuth from './component/Page/RequireAuth/RequireAuth';
import ManageItems from './component/Page/ManageItems/ManageItems';
import AddItem from './component/Page/AddItem/AddItem';
import MyItem from './component/Page/MyItem/MyItem';


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


        <Route path='/update' element={
          <RequireAuth>
            <Update></Update>
          </RequireAuth>
        }></Route>

        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='myItem' element={<MyItem></MyItem>}></Route>


      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
