import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./Shop/Shop";
import { Contact } from "./contact";
import { Cart } from "./Cart/cart";
import { ShopContextProvider } from "./Shop/shop-context";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
            <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;