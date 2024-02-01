
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PhLogin from './Components/PhLogin';
import Chat from './Components/Chat';
import Otp from './Components/Otp';
import Success from './Components/Success';
import Failed from './Components/Failed';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<PhLogin/>}/>
        <Route path="/Otp" element={<Otp/>}/>
        <Route path="/Chat" element={<Chat/>}/>
        <Route path="/Failed" element={<Failed/>}/>
        <Route path="/Success" element={<Success/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
