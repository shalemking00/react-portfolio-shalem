import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename="/react-portfolio-shalem">
      <Routes>
        <Route path="/react-portfolio" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
