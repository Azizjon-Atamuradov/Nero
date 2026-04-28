import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Kids from "./pages/Kids/Kids";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import NewArrivalsProducts from "./pages/NewArrivalsProducts/NewArrivalsProducts";
import BestSellersProducts from "./pages/BestSellersProducrs/BestSellersProducts";
import SaleProducts from "./pages/SaleProducts/SaleProducts";
import Bag from "./pages/Bag/Bag";
import { CartProvider } from "./context/CartContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="men" element={<Men />} />
      <Route path="women" element={<Women />} />
      <Route path="kids" element={<Kids />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="new-arrivals" element={<NewArrivalsProducts />} />
      <Route path="best-sellers" element={<BestSellersProducts />} />
      <Route path="sale" element={<SaleProducts />} />
      <Route path="bag" element={<Bag />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
);
