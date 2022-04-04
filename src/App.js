import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Review from './components/Reviews/Review';
import Header from './components/Header/Header';
import Error404 from './components/NotFound/Error404'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/*' element={<Error404></Error404>}></Route>
      </Routes>
    </div>
  );
}

export default App;
