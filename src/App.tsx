
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Product from './components/Product';
import Add from './components/Add';
import Home from './components/Home';



function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="product" element={<Product />}/>
    <Route path="add" element={<Add />}/>
      {/* <Route index element={<Add />} /> */}
      {/* <Route path="project/:id" element={<Project />} /> */}
    {/* </Route> */}
    </Routes>
  )
}

export default App
