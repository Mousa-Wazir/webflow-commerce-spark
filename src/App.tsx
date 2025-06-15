import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Index from './pages/Index';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import NADRAVerification from './pages/NADRAVerification';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CustomerDashboard from './pages/CustomerDashboard';
import NotFound from './pages/NotFound';
import Orders from './pages/Orders';
import Reviews from './pages/Reviews';
import { CartWishlistProvider } from "@/store/CartWishlistContext";
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import ProfileSettings from './pages/ProfileSettings';

function App() {
  return (
    <CartWishlistProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/nadra-verification" element={<NADRAVerification />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<CustomerDashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/settings" element={<ProfileSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </CartWishlistProvider>
  );
}

export default App;
