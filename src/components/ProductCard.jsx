import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem
  } = useContext(CartContext);

  const cartItem = cart.find(item => item.id === product.id);

  return (
    <div
  style={{
    background: "#ffffff",
    borderRadius: "12px",
    padding: "12px",
    width: "92%",            // ✅ VERY IMPORTANT
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "0.2s ease"
  }}
>

      {/* Image + Title */}
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "#000" }}
      >
        <div
          style={{
            height: "220px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "15px"
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

        <h3 style={{ margin: "10px 0", fontSize: "18px" }}>
          {product.title}
        </h3>
      </Link>

      {/* Price */}
      <p style={{ fontWeight: "bold", marginBottom: "6px", fontSize: "16px" }}>
        ₹{product.price}
      </p>

      {/* Rating */}
      <p style={{ fontSize: "14px", marginBottom: "6px" }}>
        ⭐ {product.rating} / 5
      </p>

      {/* Stock Status */}
      <p
        style={{
          fontSize: "14px",
          fontWeight: "bold",
          marginBottom: "12px",
          color: product.inStock ? "green" : "red"
        }}
      >
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>

      {/* Button Section */}
      {!product.inStock ? (
        <button
          disabled
          style={{
            padding: "10px",
            width: "100%",
            border: "none",
            background: "#9ca3af",
            color: "#fff",
            borderRadius: "6px",
            cursor: "not-allowed"
          }}
        >
          Out of Stock
        </button>
      ) : !cartItem ? (
        <button
          onClick={() => addToCart(product)}
          style={{
            padding: "10px",
            width: "100%",
            border: "none",
            background: "#1f2937",
            color: "#fff",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500"
          }}
        >
          Add to Cart
        </button>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#1f2937",
            color: "#ffffff",
            borderRadius: "8px",
            padding: "6px 10px"
          }}
        >
          {cartItem.quantity === 1 ? (
            <button
              onClick={() => removeItem(product.id)}
              style={{
                width: "30px",
                height: "30px",
                background: "#111827",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              🗑
            </button>
          ) : (
            <button
              onClick={() => decreaseQuantity(product.id)}
              style={{
                width: "30px",
                height: "30px",
                background: "#111827",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              −
            </button>
          )}

          <div style={{ fontWeight: "bold" }}>
            {cartItem.quantity}
          </div>

          <button
            onClick={() => increaseQuantity(product.id)}
            style={{
              width: "30px",
              height: "30px",
              background: "#111827",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
