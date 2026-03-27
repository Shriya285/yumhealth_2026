"use client"

import { useContext } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { NavBar } from "./components/Navbar"
import { Rectangle_1 } from "./components/Rectangle"
import { Banner_1 } from "./components/Banner"
import { Home } from "./components/Home"
import Login_1 from "./components/Login"
import Recipes from "./components/Recipes"
import RecipeForm from "./components/Recipe"
import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import RecipeDisplay from "./components/RecipeDisplay"
import { AuthProvider, AuthContext } from "./context/AuthContext"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext)

  if (loading) {
    return <div className="text-center p-5">Loading...</div>
  }

  if (!currentUser) {
    return <Navigate to="/login" />
  }

  return children
}

function AppContent() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div>
                <Banner_1 />
                <Rectangle_1 />
                <Home />
              </div>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login_1 />} />
        <Route
          path="/other"
          element={
            <ProtectedRoute>
              <Rectangle_1 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes"
          element={
            <ProtectedRoute>
              <Recipes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/faqs"
          element={
            <ProtectedRoute>
              <Header />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-recipe"
          element={
            <ProtectedRoute>
              <RecipeForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipe/:id"
          element={
            <ProtectedRoute>
              <RecipeDisplay />
            </ProtectedRoute>
          }
        />
        <Route
          path="/About-us"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  )
}

export default App

