import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import TakePhoto from './pages/TakePhoto';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
			  <Route path='camera' element={<TakePhoto/>} />
      </Routes>
    </div>
  );
}

export default App;
