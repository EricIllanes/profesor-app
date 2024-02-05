import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import AboutUs from "./components/about";
import EstatutosInfo from "./components/estatutosInfo";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/estatutos" element={<EstatutosInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;