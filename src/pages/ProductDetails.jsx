import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart, removeItem, cart } = useContext(CartContext);

  const product = products.find(p => p.id === Number(id));

  const [showPopup, setShowPopup] = useState("");
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);

  if (!product) {
    return <h2 style={{ padding: "20px" }}>Product not found</h2>;
  }

  const isInCart = cart.some(item => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    setShowPopup("Item added to cart");

    setTimeout(() => {
      setShowPopup("");
    }, 2000);
  };

  const handleRemove = () => {
    removeItem(product.id);
    setShowRemoveConfirm(false);
    setShowPopup("Item removed from cart");

    setTimeout(() => {
      setShowPopup("");
    }, 2000);
  };

  return (
    <div
      style={{
        padding: "5px",
        background: "#f1f3f6",
        minHeight: "0vh",
        position: "relative"
      }}
    >
      {/* Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "350px",
            right: "700px",
            background: "#1f2937",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "6px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            zIndex: 1000
          }}
        >
          {showPopup}
        </div>
      )}

      <div
        style={{
          display: "flex",
          gap: "40px",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
        }}
      >
        {/* Image Section */}
        <div
          style={{
            width: "400px",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            borderRadius: "10px",
            border: "1px solid #ffffff"
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain"
            }}
          />
        </div>

        {/* Info Section */}
        <div style={{ maxWidth: "500px" }}>
          <h2>{product.title}</h2>

          <p style={{ marginTop: "10px" }}>
            ⭐ {product.rating} / 5
          </p>

          <p style={{ marginTop: "15px" }}>
            {product.description}
          </p>

          <p style={{ marginTop: "10px", color: "#555" }}>
            This product is built using high-quality materials and engineered
            for durability and performance. Designed to meet modern standards,
            it ensures reliability, efficiency, and long-term satisfaction.
          </p>

          <h3 style={{ marginTop: "20px" }}>
            ₹{product.price}
          </h3>

          <p
            style={{
              fontWeight: "bold",
              color: product.inStock ? "green" : "red",
              marginTop: "5px"
            }}
          >
            {product.inStock ? "Available in Stock" : "Currently Out of Stock"}
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
            {!isInCart ? (
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                style={{
                  padding: "12px 20px",
                  background: product.inStock ? "#143478" : "#9ca3af",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: product.inStock ? "pointer" : "not-allowed"
                }}
              >
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            ) : (
              <button
                onClick={() => navigate("/cart")}
                style={{
                  padding: "12px 20px",
                  background: "#1f2937",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Go to Cart
              </button>
            )}

            <button
              disabled={!product.inStock}
              style={{
                padding: "12px 20px",
                background: product.inStock ? "#2563eb" : "#9ca3af",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: product.inStock ? "pointer" : "not-allowed"
              }}
            >
              Buy Now
            </button>
          </div>

          {/* Remove Option */}
          {isInCart && (
            <div style={{ marginTop: "35px" }}>
              {!showRemoveConfirm ? (
                <p
                  onClick={() => setShowRemoveConfirm(true)}
                  style={{
                    color: "#dc2626",
                    cursor: "pointer",
                    fontSize: "14px"
                  }}
                >
                  Want to remove this item from cart?
                </p>
              ) : (
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={handleRemove}
                    style={{
                      padding: "6px 12px",
                      background: "#dc2626",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setShowRemoveConfirm(false)}
                    style={{
                      padding: "6px 12px",
                      background: "#6b7280",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    No
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
