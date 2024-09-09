import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotFoundPage from './pages/NotfoundPage';
import WriteArticle from './pages/WriteArticle';
import EditArticle from './pages/EditArticle';
import Admin from './pages/Admin';
import Login from './pages/LoginPage';
import PrivateRoute from './PrivateRoute'; 
import { AuthProvider } from './AuthContext'; 

function App() {

  return (
    <div className="App">
      <Header isSticky={true} />
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Admin />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<PrivateRoute element={<WriteArticle />} />} />
        <Route path="/edit/:slug" element={<PrivateRoute element={<EditArticle />} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
function AppWrapper() {
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
}

export default AppWrapper;