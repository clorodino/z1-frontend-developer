import './App.css';
import { Routes, Route } from 'react-router-dom'
import TakePhoto from './pages/TakePhoto';
import Main from './pages/Main';
import { useState } from 'react';

function App() {

  const [picture, setPicture] = useState<string>()
  const [isApproved, setIsApproved] = useState<boolean>()
  console.log('picture in App ---->',picture);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main picture={picture} setPicture={setPicture} isApproved={isApproved} setIsApproved={setIsApproved}/>} />
			  <Route path='camera' element={<TakePhoto picture={picture} setPicture={setPicture} isApproved={isApproved} setIsApproved={setIsApproved}/>} />
      </Routes>
    </div>
  );
}

export default App;
