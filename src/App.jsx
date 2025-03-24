import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import './App.css'

import Memory from './pages/memory';

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path='/memory' element={<Memory />} />
      </Routes>
    </div>
  )
}

export default App
