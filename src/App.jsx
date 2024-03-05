import Header from "./components/Header";
import Home from "./pages/Home";
import Style from "./pages/Style";
import Footer from "./components/Footer";
import Missing from "./pages/Missing";
import { Routes, Route, useNavigate} from 'react-router-dom';
export default function App() {
  return (
    <div>
    <Header />
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/style" element={<Style/>} />
    <Route path="*" element={<Missing/>} />
    </Routes>
    <Footer />
    
    </div>
  )
}