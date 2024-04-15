import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Aboutus from "./pages/Aboutus";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import ForgotPassword from "./pages/ForgotPassword";
import Account from "./pages/Account";
import ChangePassword from "./pages/ChangePassword";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/aboutus" element={<Aboutus />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route path="/changepassword" element={<ChangePassword />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
            <Route path="/products/:url" element={<ProductDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
