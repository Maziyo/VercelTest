import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

import Memory from './pages/memory';

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate(); 
  
  useEffect(() => {
    // 기본 경로로 방문 시 /memory로 리디렉션
    navigate('/memory');
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/memory" element={<Memory />} />
      </Routes>
    </div>
  );
}

export default App;
