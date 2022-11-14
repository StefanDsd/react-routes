import { Home } from "./pages/home";
import { Dogs } from "./pages/dogs";
import { Cats } from "./pages/cats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cats" element={<Cats/>} />
          <Route path="/dogs" element={<Dogs/>} />
        </Routes>
      </Router>
    </div>
  );
}


