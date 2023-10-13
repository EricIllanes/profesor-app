import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import AboutUs from "./Components/about";
import EstatutosInfo from "./Components/estatutosInfo";

function App() {
  return (
    <div className="bg-grayColor flex w-full">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/estatutos" element={<EstatutosInfo />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App;