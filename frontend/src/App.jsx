import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import AddBook from './AddBook'
import Navbar from './componen/navbar'
import EditBook from './EditBook'

function App() {
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/add-book' element={<AddBook/>}/>
        <Route path='/edit-book/:id' element={<EditBook/>}/>
      </Routes>
    </Router>
  )
}

export default App
