import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          البن اليمني <i className="fas fa-mug-hot"></i>
        </Link>
        
        <nav>
          <ul id="nav-menu" className={isMenuOpen ? 'active' : ''}>
            <li><Link to="/" className={isActive('/')} onClick={closeMenu}>الرئيسية</Link></li>
            <li><Link to="/about" className={isActive('/about')} onClick={closeMenu}>من نحن</Link></li>
            <li><Link to="/menu" className={isActive('/menu')} onClick={closeMenu}>قائمة المشروبات</Link></li>
            <li><Link to="/testimonials" className={isActive('/testimonials')} onClick={closeMenu}>آراء العملاء</Link></li>
            <li><Link to="/gallery" className={isActive('/gallery')} onClick={closeMenu}>معرض الصور</Link></li>
            <li><Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>اتصل بنا</Link></li>
          </ul>
        </nav>
        
        <div className="hamburger" id="hamburger" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;