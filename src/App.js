import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  About,
  Error,
  Checkout,
  Home,
  Products,
  SingleProduct,
  Cart,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Error />} />
          <Route
            path='/checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
