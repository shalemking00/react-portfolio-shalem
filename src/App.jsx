import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shalem" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
