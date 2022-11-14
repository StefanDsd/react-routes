import { Home } from "./pages/home";
import { Dogs } from "./pages/dogs";
import { Cats } from "./pages/cats";

export default function App() {
  return (
    <div className="App">
      <Home />
      <Cats />
      <Dogs />
    </div>
  );
}


