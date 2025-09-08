import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Agents from './pages/Agents.js'
import Dashboard from './pages/Dashboard.js'
import Operators from './pages/Operators.js'
import Users from './pages/Users.js'
import NoteFound from './pages/NoteFound.js';
import SideBar from './components/SideBar.jsx';
import Conductor from './components/Conductor.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Conductor />
      <SideBar />
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/users" element={ <Users />} />
        <Route path="/operators" element={ <Operators />} />
        <Route path="/Agents" element={ <Agents />} />
        <Route path="*" element={ <NoteFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
