import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div
      style={{
        background: "#f1f3f6",
        minHeight: "100vh"
      }}
    >
      {/* GLOBAL CENTERED CONTAINER */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <Routes>
          <Route
            path="/"
            element={<Home searchTerm={searchTerm} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
