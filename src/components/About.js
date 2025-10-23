import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>من نحن</h2>
          <p>قصة البن اليمني وأسرار تميزنا</p>
        </div>
        
        <div className="about-grid">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="البن اليمني الأصيل" />
          </div>
          
          <div className="about-content">
            <h3>تراث يمتد لقرون</h3>
            <p>يمثل البن اليمني تراثًا ثقافيًا عريقًا يمتد لأكثر من 500 عام. لطالما كانت اليمن بوابة القهوة إلى العالم، حيث كانت ميناء المخا اليمني نقطة انطلاق حبوب البن إلى العالم.</p>
            
            <h3>فلسفتنا</h3>
            <p>نلتزم بتقديم القهوة اليمنية الأصيلة التي تُزرع في المرتفعات الجبلية لليمن، وتُجمع يدويًا، وتُحمص بطريقة تقليدية لتحافظ على نكهتها الفريدة ورائحتها الزكية.</p>
            
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-mountain"></i>
                </div>
                <div className="feature-text">
                  <h4>من المرتفعات اليمنية</h4>
                  <p>قهوة تُزرع في مرتفعات اليمن على ارتفاعات تصل إلى 2000 متر</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-seedling"></i>
                </div>
                <div className="feature-text">
                  <h4>حصاد يدوي</h4>
                  <p>كل حبة قهوة تُجمع وتُفرز يدويًا بعناية فائقة</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-fire"></i>
                </div>
                <div className="feature-text">
                  <h4>تحميص تقليدي</h4>
                  <p>تحميص بطريقة تقليدية على نار هادئة لساعات طويلة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="yemeni-icon icon-1 rotate"></div>
      <div className="yemeni-icon icon-2 rotate"></div>
    </section>
  );
};

export default About;