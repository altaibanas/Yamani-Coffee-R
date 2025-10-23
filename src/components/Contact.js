import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>اتصل بنا</h2>
          <p>يسعدنا تلقي استفساراتكم واقتراحاتكم في أي وقت</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>معلومات التواصل</h3>
            <div className="contact-details">
              <div>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>العنوان</h4>
                  <p>شارع البن اليمني، حي القاهرة، صنعاء</p>
                </div>
              </div>
              <div>
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h4>الهاتف</h4>
                  <p>+967 1 234 5678</p>
                </div>
              </div>
              <div>
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>البريد الإلكتروني</h4>
                  <p>info@yemenicoffee.com</p>
                </div>
              </div>
              <div>
                <i className="fas fa-clock"></i>
                <div>
                  <h4>أوقات العمل</h4>
                  <p>يومياً من 7 صباحاً حتى 12 منتصف الليل</p>
                </div>
              </div>
            </div>
            <h3>تابعنا</h3>
            <div className="contact-social">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-snapchat-ghost"></i></a>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>أرسل رسالة</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">الاسم الكامل</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">رقم الهاتف</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">الرسالة</label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">إرسال الرسالة</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;