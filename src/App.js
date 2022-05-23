import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Header from './pages/shared/Header';
import Footer from './pages/shared/Footer';
import Home from './pages/home/Home';
import Aboutus from './pages/About/Aboutus';
import Login from './pages/Authentication/Login';
import SignUp from './pages/Authentication/SignUp';
import ContactUs from './pages/ContactUs/ContactUs';
import Blog from './pages/Blog/Blog';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes> 
        <Route path='/' element={<Home></Home>} />
        <Route path='about' element={<Aboutus></Aboutus>} />
        <Route path='contact' element={<ContactUs></ContactUs>} />
        <Route path='blog' element={<Blog></Blog>} />
        <Route path='portfolio' element={<Portfolio></Portfolio>} />
        <Route path='login' element={<Login></Login>} />
        <Route path='SignUp' element={<SignUp></SignUp>} /></Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
