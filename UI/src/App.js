
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/footercomponet/footer';
import Head from './component/headercomponet/header';
import Home from './component/homecomponent/home';
import Register from './component/registercomponent/register';
import Login from './component/logincomponent/login';
import User from './component/usercomponent/userhome';
import Logout from './component/logoutcomponent/logout';
import Manageuser from './component/manageusercomponet/manageuser';
import Edetail from './component/editdetailcomponent/edtail';

function App() {
  return (
    <>
    <div class="hero_area">
    {/* Header component  */}
    <Head/>
  </div>

 <Routes>
<Route path=""  element={<Home/>}></Route>
<Route path="/register"  element={<Register/>}></Route>
<Route path="/login"  element={<Login/>}></Route>
<Route path="/user"  element={<User/>}></Route>
<Route path="/logout"  element={<Logout/>}></Route>
<Route path="/manageuser"  element={<Manageuser/>}></Route>
<Route path="/editdetail"  element={<Edetail/>}></Route>
 </Routes>
  <div class="body_bg layout_padding">

  {/* Footer component */}
  <Footer/>
 </div>
    </>
  );
}

export default App;
