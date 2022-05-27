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
import Purchase from './pages/Purchase/Purchase';
import Users from './pages/Dashboard/Users';
import RequireAdmin from './pages/Authentication/RequireAdmin';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageProducts from './pages/Dashboard/ManageProducts';
import MyOrders from './pages/Dashboard/MyOrders';
import Payment from './pages/Dashboard/Payment';
import ManageOrders from './pages/Dashboard/ManageOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import Review from './pages/home/Review';
import AddReview from './pages/Dashboard/AddReview';
import MyReview from './pages/Dashboard/MyReview';

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
          </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='reviews' element={<RequireAuth><MyReview></MyReview></RequireAuth>}></Route>
          <Route path='addreviews' element={<RequireAuth><AddReview></AddReview></RequireAuth>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageProduct' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path='manageOrder' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          </Route>
        <Route path='purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>} />
        <Route path='resource' element={
          <RequireAuth>
            <Resource></Resource>
          </RequireAuth>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
