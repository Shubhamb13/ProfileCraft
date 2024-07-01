import React from 'react'
import Home from './Home'
import Create from './Create'
import Edit from './Edit'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
     </Routes>
     </BrowserRouter>
      
    </div>
  )
}

export default App