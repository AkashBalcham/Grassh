import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Landing from './Landing/landing'


function App() {
  
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing page="landing"/>} />
              
            
          </Routes>
        </div>
    </Router>
      

      
  );
}

export default App;
