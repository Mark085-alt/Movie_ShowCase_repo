
import Home_page from "./pages/Home_page"
import {Route , Routes} from 'react-router-dom'
import Wishlist from "./pages/Wishlist"
import ContactUs from "./pages/ContactUs"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Navbar from "./components/Navbar";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import Search_page from './pages/Search_page'
import Landing_page from "./pages/Landing_page"

function App() {

  return (
    <>
    <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home_page></Home_page>}/>
          <Route path="/Wishlist" element={<Wishlist></Wishlist>}/>
          <Route path="/ContactUs" element={<ContactUs></ContactUs>}/>
          <Route path="/Login" element={<Login></Login>}/>
          <Route path="/SignUp" element={<SignUp></SignUp>}/>
          <Route path="/Category/:catID/:catName" element={<Category></Category>}/>
          <Route path="/search/:query" element={<Search_page></Search_page>}/>
          <Route path="/page/:id" element={<Landing_page></Landing_page>}/>
        </Routes>
        <Footer></Footer>
    </>
  )
}

export default App
