import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import Agents from "./pages/Agents"
import Complaints from "./pages/Complaints"
import Fraud from "./pages/Fraud"
import NotFound from "./pages/NotFound"
import Sidebar from "./components/Sidebar"
import Admin from "./components/Admin.jsx"


function App() {
  return (
    <div >
    <BrowserRouter>
       <Admin />
       <Sidebar />
      <Routes>
       <Route path="/" element={ <Dashboard/> } />
       <Route path="/users" element={ <Users/> } />
       <Route path="/agents" element={ <Agents/> } />
       <Route path="/complaints" element={ <Complaints/> } />
       <Route path="/fraud" element={ <Fraud/> } />
       <Route path="*" element={ <NotFound/> } />
      </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
