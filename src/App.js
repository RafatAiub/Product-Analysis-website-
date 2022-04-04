import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Blogs from './Blogs/Blogs';
import Dashboard from './Dashboard/Dashboard';
import Home from './Home/Home';
import Review from './Reviews/Review';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='/*' element></Route>
      </Routes>
    </div>
  );
}

export default App;
