import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Product provider
import ProductProvider from "./contexts/ProductContext";
// Sidebar provider
import SidebarProvider from "./contexts/SidebarContext";
// Cart provider
import CartProvider from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>,
);
