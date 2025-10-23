import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('شكراً للاشتراك في نشرتنا البريدية!');
    setEmail('');
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>البن اليمني</h3>
            <p>تراث يمتد لقرون في كل رشفة قهوة. نقدم لكم أجود أنواع البن اليمني بأيدي محترفين في أجواء يمنية أصيلة.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-snapchat-ghost"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>روابط سريعة</h3>
            <ul>
              <li><Link to="/"><i className="fas fa-chevron-left"></i> الرئيسية</Link></li>
              <li><Link to="/about"><i className="fas fa-chevron-left"></i> من نحن</Link></li>
              <li><Link to="/menu"><i className="fas fa-chevron-left"></i> قائمة المشروبات</Link></li>
              <li><Link to="/testimonials"><i className="fas fa-chevron-left"></i> آراء العملاء</Link></li>
              <li><Link to="/gallery"><i className="fas fa-chevron-left"></i> معرض الصور</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>فروعنا</h3>
            <ul>
              <li><a href="#"><i className="fas fa-chevron-left"></i> فرع صنعاء - حي القاهرة</a></li>
              <li><a href="#"><i className="fas fa-chevron-left"></i> فرع عدن - حي كريتر</a></li>
              <li><a href="#"><i className="fas fa-chevron-left"></i> فرع تعز - حي المدينة</a></li>
              <li><a href="#"><i className="fas fa-chevron-left"></i> فرع الحديدة - حي المستشفى</a></li>
            </ul>
          </div>
          
          {/* <div className="footer-col">
            <h3>النشرة البريدية</h3>
            <p>اشترك في نشرتنا البريدية لتصلك آخر العروض والأخبار</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
          </div> */}
        </div>
        
        <div className="copyright">
          <p>جميع الحقوق محفوظة &copy; 2023 البن اليمني | تم التصميم والتطوير بكل حب</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;