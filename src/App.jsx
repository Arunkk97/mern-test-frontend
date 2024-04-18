import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RegPage from './pages/RegPage'
import RegList from './pages/RegList'

function App() {

  return (
    <>
  <Routes> 
    <Route path='/' element={<HomePage/>}/>
    <Route path='/regpage' element={<RegPage/>}/>
    <Route path='/reglist' element={<RegList/>}/>
    <Route path='/*' element={<Navigate to={'/'}/>}/>

  </Routes>
    </>
  )
}

export default App
