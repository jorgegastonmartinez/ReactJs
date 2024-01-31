import "./App.css";

// react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// CONTEXT
import { ItemsProvider } from "./context/ItemsContext.jsx";

// components
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar.jsx";
import ImagePrincipal from "./components/ImagePrincipal/ImagePrincipal.jsx";
import Footer from "./components/Footer/Footer";

// PAGES
import HomePage from "./pages/Home/HomePage.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";
import ShopPage from "./pages/Shop/ShopPage.jsx";
import ItemCategoryPage from "./pages/ItemCategory/ItemCategoryPage.jsx";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import CheckOutPage from "./pages/CheckOut/CheckOutPage.jsx";

const App = () => {
  return (
    <Router>
      <ItemsProvider>
        <div className="App">
          <Header />
          <Navbar />
          <ImagePrincipal />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/item-detail/:id" element={<ProductDetailPage />} />
            <Route
              path="/item-category/:categoria"
              element={<ItemCategoryPage />}
            />
            <Route path="/checkout" element={<CheckOutPage />} />
          </Routes>

          <Footer />
        </div>
      </ItemsProvider>
    </Router>
  );
};

export default App;
