import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IDE from './pages/IDE';
import Login from './pages/Login';
import Problems from './pages/Problems';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/ide' element={<IDE/>}/> {/* Route for IDE Workspace*/}
        <Route path='/problems' element={<Problems/>}/> {/* Route for Problems Page*/}
        <Route path='/' element={<Login/>}/> {/* Route for Signing up*/}
      </Routes>
    </BrowserRouter>
  );
}