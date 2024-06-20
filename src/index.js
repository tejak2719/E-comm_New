
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import { Home, Product, Products, ContactPage, Cart, Login, Register, Checkout, PageNotFound, Marketplace } from "./pages";
import VendorPage from './pages/VendorPage';
import VendorDashboard from './components/VendorDashboard';

function App() {
  

  return (
    <BrowserRouter>
      <Provider store={store}>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" exact element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/vendor/:vendorId" element={<VendorPage />} />
            <Route path="/vendor-dashboard" element={<VendorDashboard />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/product/*" element={<PageNotFound />} />
          </Routes>
        
      </Provider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);