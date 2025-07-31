import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Share from "./pages/Share";
import Browse from "./pages/Browse";
import UserLogin from "./pages/UserLogin";
import Resources from "./pages/Resources";
import UserRegister from "./pages/UserRegister";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/share" element={<Share />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/register" element={<UserRegister />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
