
import { Route, Routes } from 'react-router-dom';
import './App.css';
import D3chart from './Components/D3chart/D3chart';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="">
      <Routes>
      <Route path="/" element={<SignUp></SignUp>}></Route>
        
        <Route path="/chart" element={<D3chart></D3chart>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
