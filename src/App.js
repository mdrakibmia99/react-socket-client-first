import './App.css';
import io from 'socket.io-client';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    const socket =io.connect('/');
  },[])
  return (
    <div className="App">
       socket conneted
    </div>
  );
}

export default App;
