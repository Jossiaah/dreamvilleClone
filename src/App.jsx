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
import SingleProduct from "./Pages/SingleProduct";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/all" element={<All />} />
        <Route exact path="/products/:productId" element={<SingleProduct />} />
        <Route exact path='/tops' element={<Tops />} />
        <Route exact path="/bottoms" element={<Bottoms />} />
        <Route exact path="/accessories" element={<Accessories />} />
      </Routes>
    </Router>
  )
};

export default App;