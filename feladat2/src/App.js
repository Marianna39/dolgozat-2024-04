import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main'
import Kep from './pages/Kep'
import Kilato from './pages/Kilato'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/kilatok" element={<Kilato />}/>
        <Route path="/kepek" element={<Kep />}/>
      </Routes>
    </div>
  );
}
 
export default App;
