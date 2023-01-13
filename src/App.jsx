import Home from "./Pages/Home";
import All from "./Pages/All";
import Bottoms from "./Pages/Bottoms";
import Accessories from "./Pages/Accessories";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Tops from "./Pages/Tops";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/all" element={<All />} />
        <Route exact path='/tops' element={<Tops />} />
        <Route exact path="/bottoms" element={<Bottoms />} />
        <Route exact path="/accessories" element={<Accessories />} />
      </Routes>
    </Router>
  )
};

export default App;