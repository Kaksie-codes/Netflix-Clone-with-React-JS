import HomeScreen from './Pages/HomeScreen'
import Error from './Components/Error'
import LoginScreen from './Pages/LoginScreen'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(false)
  

  return (
    <div className="app">  
      <Router>       
        <Routes>
          {!user && (<Route  path="/login" element={<LoginScreen/>}/>)} 
          {user && (
            <>
              <Route path='/' exact element={<HomeScreen/>}/>              
            </> 
          )}    
          <Route path='*' element={<Error/>}/>      
        </Routes>
      </Router>
    </div>
  )
}

export default App
