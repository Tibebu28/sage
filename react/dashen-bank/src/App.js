import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NoteFound from "./pages/NoteFound";
import Category from "./pages/Category";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NoteFound />} />
          <Route path="/Category" element={<Category/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
