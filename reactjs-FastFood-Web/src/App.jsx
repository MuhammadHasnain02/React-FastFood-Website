import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import CollectionPage from "./components/CollectionPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

const routes = ["/cart"];

function App() {
  // const location = useLocation();

  return (
    <div className="flex flex-col h-screen justify-between">

      {routes.includes(location.pathname) && <Navbar />}
      
      <Routes>

        <Route index element={<Home />} />
        <Route path="/products" element={<CollectionPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

      {routes.includes(location.pathname) && <Footer />}

    </div>


  )

}

export default App