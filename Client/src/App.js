import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Pets from "./Components/Pets/Pets";
import AdoptForm from "./Components/AdoptForm/AdoptForm";
import AdminLogin from "./Components/AdminPanel/AdminLogin";
import "./App.css";

// Importing SignUp and Login from src/pages
import SignUp from "./pages/Signup";        // Correct location of SignUp component
import Login from "./pages/Login";          // Correct location of Login component
import UserDashboard from "./Components/UserDashboard/UserDashboard"; // User Dashboard component

const Layout = ({ children }) => (
  <>
    <Navbar title="PawFinds" />
    {children}
    <Footer title="PawFinds" />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <Layout>
              <Home description="Ensure you are fully prepared to provide proper care and attention to your pet before welcoming them into your home." />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/pets"
          element={
            <Layout>
              <Pets />
            </Layout>
          }
        />
        <Route
          path="/adopt-form"
          element={
            <Layout>
              <AdoptForm />
            </Layout>
          }
        />

        {/* User Authentication Routes */}
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        {/* User Dashboard Route (protected, will check for JWT) */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <UserDashboard />
            </Layout>
          }
        />

        {/* Admin Login */}
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
