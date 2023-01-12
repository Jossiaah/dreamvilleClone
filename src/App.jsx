import Home from "./Pages/Home";
import All from "./Pages/All";
import Bottoms from "./Pages/Bottoms";
import Accessories from "./Pages/Accessories";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/all" element={<All />} />
        <Route exact path="/" element={<Bottoms />} />
        <Route exact path="/" element={<Accessories />} />
      </Routes>
    </Router>
  )
};

export default App;