import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Header from './pages/shared/Header';
import Footer from './pages/shared/Footer';
import Home from './pages/home/Home';
import Aboutus from './pages/About/Aboutus';
import Login from './pages/Authentication/Login';
import SignUp from './pages/Authentication/SignUp';
import Blog from './pages/Blog/Blog';
import Portfolio from './pages/Portfolio/Portfolio';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard/Dashboard';
import RequireAuth from './pages/Authentication/RequireAuth';
import Resource from './pages/Resource/Resource';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='about' element={<Aboutus></Aboutus>} />
        <Route path='blog' element={<Blog></Blog>} />
        <Route path='portfolio' element={<Portfolio></Portfolio>} />
        <Route path='login' element={<Login></Login>} />
        <Route path='signup' element={<SignUp></SignUp>} />
        <Route path='dashboard' element={
        <RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}  />
        <Route path='resource' element={
        <RequireAuth>
          <Resource></Resource>
        </RequireAuth>}  />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
