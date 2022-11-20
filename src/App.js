import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Hotels from "./pages/Hotels/Hotels";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="hotels" element={<Hotels />}>
            <Route path=":hotelsId" element={<Hotels />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
