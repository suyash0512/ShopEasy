import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ searchTerm, setSearchTerm }) {
  const { cart } = useContext(CartContext);
  const location = useLocation();

  const handleSearch = () => {
    if (setSearchTerm) {
      setSearchTerm(searchTerm);
    }
  };

  return (
    <nav
      style={{
        backgroundColor: "#1f2937",
        color: "#ffffff",
        padding: "15px 0",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
      }}
    >
      {/* CENTERED CONTAINER */}
      <div
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
          padding: "0 25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {/* LEFT: Logo */}
        <Link
          to="/"
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#ffffff",
            textDecoration: "none"
          }}
        >
          ShopEasy
        </Link>

        {/* CENTER: Search Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "400px",
            background: "#ffffff",
            borderRadius: "6px",
            overflow: "hidden"
          }}
        >
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm || ""}
            onChange={(e) =>
              setSearchTerm && setSearchTerm(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            style={{
              flex: 1,
              padding: "10px 12px",
              border: "none",
              outline: "none",
              fontSize: "14px"
            }}
          />

          <button
            onClick={handleSearch}
            style={{
              width: "45px",
              height: "100%",
              border: "none",
              background: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#1f2937"
              viewBox="0 0 24 24"
            >
              <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
            </svg>
          </button>
        </div>

        {/* RIGHT: Navigation Links */}
        <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              color: location.pathname === "/" ? "#facc15" : "#ffffff",
              fontWeight: "500",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 11.5L12 4l9 7.5" />
                <path d="M5 10v8a1 1 0 0 0 1 1h3v-6h6v6h3a1 1 0 0 0 1-1v-8" />
              </svg>
              <span>Home</span>
            </span>
          </Link>

          <Link
            to="/cart"
            style={{
              color: location.pathname === "/cart" ? "#facc15" : "#ffffff",
              fontWeight: "500",
              textDecoration: "none",
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 6h15l-1.5 9h-12z" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
              <span>Cart</span>
            </span>

            {cart.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-20px",
                  background: "#ef4444",
                  color: "#ffffff",
                  borderRadius: "50%",
                  padding: "2px 7px",
                  fontSize: "12px",
                  fontWeight: "bold"
                }}
              >
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
