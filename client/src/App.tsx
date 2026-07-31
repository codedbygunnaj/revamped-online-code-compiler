import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IDE from './pages/IDE';
import Login from './pages/Login';
import Problems from './pages/Problems';
import Signup from './pages/Signup';
import Tutorial from './pages/Tutorials';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/> {/* Route for Logging in*/}
        <Route path='/signup' element={<Signup/>}/> {/* Route for Signing up*/}

        <Route path='/ide' element={<IDE/>}/> {/* Route for IDE Workspace*/}
        <Route path='/problems' element={<Problems/>}/> {/* Route for Problems Page*/}
        <Route path='/tutorials' element={<Tutorial/>}/> {/* Route for Tutorial Page*/}
        
      </Routes>
    </BrowserRouter>
  );
}