import { Home } from "./pages/home";
import { Dogs } from "./pages/dogs";
import { Cats } from "./pages/cats";
import { Header } from "./components/header";
import { DogsBreedsPage } from "./pages/dogs/dogs-breed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
    <Router>
    <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cats" element={<Cats/>} />
          <Route path="/dogs" element={<Dogs/>} />
          <Route path="/dogs/:id" element={<DogsBreedsPage />} />
        </Routes>
      </Router>
    </div>
  );
}


