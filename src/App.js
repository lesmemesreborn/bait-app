import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import background from "./assets/bg.jpg"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Login from "./components/Login"
import Baits from "./components/Baits"
import Lures from "./components/Lures"
import Advices from "./components/Advices"
import Reports from "./components/Reports"
import Feedback from "./components/Feedback"

const App = ({ children }) => {
  return (
    <Router>
      <div style={{ backgroundImage: `url(${background})` }}></div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/baits" element={<Baits />} />
        <Route path="/lures" element={<Lures />} />
        <Route path="/" element={<Main />} />
        <Route path="/advices" element={<Advices />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  )
}

export default App
