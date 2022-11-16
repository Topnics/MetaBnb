import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Stay from './components/Stay/Stay';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/placetostay" element={<Stay />}></Route>
      </Routes>
    </>

    
  );
}

export default App;
