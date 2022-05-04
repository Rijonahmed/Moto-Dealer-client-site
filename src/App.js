
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Home-Pages/Header/Header'
import Inventory from './component/Home-Pages/Inventory/Inventory'
import Banner from './component/Home-Pages/Banner/Banner';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Routes>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      </Routes>

    </div>
  );
}

export default App;
