import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import BarChart from './Components/BarChart';
import NavBar from './Components/NavBar';
import DashBoard from './Components/DashBoard';

function App() {
  return (
    <div className="App">
    <NavBar/>
     {/* <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/' />
     </Routes>
     </BrowserRouter> */}
     {/* <DashBoard/> */}
    </div>
  );
}

export default App;
