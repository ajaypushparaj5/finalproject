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
import SignUp from "./pages/SignUp"; // Import SignUp
import Login from "./pages/Login"; // Import Login
import UserDashboard from "./Components/UserDashboard/UserDashboard"; // User Dashboard

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
        {/* Default route set to Login */}
        <Route
          path="/"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        {/* Other routes */}
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

        {/* User Dashboard Route */}
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
