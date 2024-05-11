import { Routes, Navigate, Route } from 'react-router-dom'
import AuthMiddleware from './middleware/auth';
import Home from './views/Home';
import Login from './views/Auth/Login'
import Register from './views/Auth/Register'
import User from './views/Auth/User'
import PersistLogin from './components/PersistLogin';
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<PersistLogin />}>
        
        <Route path='/'>
          <Route path='' element={<AuthMiddleware />}>
              <Route index element={<Home />}></Route>
          </Route>
        </Route>
        
        <Route path='/auth'>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          
         
        </Route>
      </Route>
      
      <Route path='*' element={<Navigate to='/' />}></Route>
    </Routes>
  </>
  );
}

export default App;
