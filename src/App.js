import './App.css';
import Home from './Pages/Home';
import Event from './Pages/Event';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
function App() {
  return (
     <BrowserRouter>
     <Routes>
     <Route path="/" exact Component={Home}/>
     <Route path="/Event" exact Component={Event}/>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
