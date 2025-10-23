import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>أصالة <span>اليمن</span> في كل رشفة قهوة!</h1>
          <p>استمتع بتجربة فريدة من القهوة اليمنية الأصيلة، حيث تمتزج التقاليد العريقة مع النكهات الفاخرة</p>
          <div className="hero-btns">
            <Link to="/menu" className="btn">اطلب الآن</Link>
            <Link to="/contact" className="btn btn-outline">اتصل بنا</Link>
          </div>
        </div>
      </div>
      <div className="yemeni-pattern pattern-1"></div>
      <div className="yemeni-pattern pattern-2"></div>
    </section>
  );
};

export default Home;