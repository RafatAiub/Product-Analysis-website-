import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import './App.css';
import Blogs from './components/Blogs/Blogs';

import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Header from './components/Header/Header';
import Error404 from './components/NotFound/Error404'
import Charts from './components/Dashboard/Charts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Charts></Charts>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>
    </div>
  );
}

export default App;
