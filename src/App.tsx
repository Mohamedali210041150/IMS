
import './App.css';
import LoginPage from './Views/login-page';
import Signup from './Views/Signup';
import Dashboard from './Views/dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inventory from './Views/inventory';
import Reports from './Views/Reports';
import Suppliers from './Views/suppliers';
import Orders from './Views/orders';
import ManageStore from './Views/manage-store';
import Settings from './Views/settings';
import LogoutPage from './Views/logout-page';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory/>} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/suppliers" element={<Suppliers />} />
             <Route path="/Orders" element={<Orders />} /> 
             <Route path="/manage-store" element={<ManageStore />} />
             <Route path="/Settings" element={<Settings />} /> 
             <Route path="/logout-page" element={<LogoutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
