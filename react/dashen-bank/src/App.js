import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NoteFound from "./pages/NoteFound";
import Category from "./pages/Category";
import Electronic from "./pages/Electronic";
import Layout from "./pages/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />

            <Route path="Category">
              <Route index element={<Category />} />
              <Route path="electronic" element={<Electronic />} />

            </Route>
          </Route>
          <Route path="*" element={<NoteFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
