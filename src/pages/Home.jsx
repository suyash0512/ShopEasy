import { useState, useMemo } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home({ searchTerm }) {

  const [sortOrder, setSortOrder] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [minRating, setMinRating] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchTerm) {
      result = result.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (inStockOnly) {
      result = result.filter(product => product.inStock);
    }

    if (minRating) {
      result = result.filter(product => product.rating >= Number(minRating));
    }

    if (sortOrder === "low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [sortOrder, inStockOnly, minRating, searchTerm]);

  const clearFilters = () => {
    setSortOrder("");
    setInStockOnly(false);
    setMinRating("");
  };

  return (
    <div
      style={{
        background: "#f1f3f6",
        minHeight: "100vh",
        paddingTop: "30px",
        paddingBottom: "30px"
      }}
    >
      {/* CENTERED PROFESSIONAL CONTAINER */}
      <div
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
          paddingLeft: "25px",
          paddingRight: "25px"
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "flex-start"
          }}
        >

          {/* FILTER PANEL */}
          <div
            style={{
              width: "260px",
              background:"rgb(199, 199, 199)",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              height: "fit-content",
              flexShrink: 0
            }}
          >
          <h3
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px"
  }}
>
  {/* Slider Filter Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <circle cx="9" cy="6" r="2"></circle>

    <line x1="4" y1="12" x2="20" y2="12"></line>
    <circle cx="15" cy="12" r="2"></circle>

    <line x1="4" y1="18" x2="20" y2="18"></line>
    <circle cx="11" cy="18" r="2"></circle>
  </svg>

  Filters
</h3>


            <div style={{ marginTop: "15px" }}>
              <strong>Sort by Price</strong>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                style={{ width: "100%", marginTop: "8px", padding: "6px" }}
              >
                <option value="">None</option>
                <option value="low-high">Low to High</option>
                <option value="high-low">High to Low</option>
              </select>
            </div>

            <div style={{ marginTop: "20px" }}>
              <strong>Availability</strong>
              <label style={{ display: "block", marginTop: "8px" }}>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                />{" "}
                In Stock Only
              </label>
            </div>

            <div style={{ marginTop: "20px" }}>
              <strong>Minimum Rating</strong>
              <select
                value={minRating}
                onChange={(e) => setMinRating(e.target.value)}
                style={{ width: "100%", marginTop: "8px", padding: "6px" }}
              >
                <option value="">All</option>
                <option value="4">4★ & above</option>
                <option value="3.5">3.5★ & above</option>
                <option value="3">3★ & above</option>
              </select>
            </div>

            <button
              onClick={clearFilters}
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "8px",
                background: "#dc2626",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Clear Filters
            </button>
          </div>

          {/* PRODUCT GRID */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
              gap: "30px"
            }}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
