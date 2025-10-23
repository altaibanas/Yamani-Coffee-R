import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "سارة محمد",
      role: "زبونة منذ 2020",
      rating: 5,
      text: "القهوة اليمنية هنا تذكرني بزيارتي لصنعاء القديمة! النكهة الغنية والرائحة المميزة لا تُقارن بأي مكان آخر.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "أحمد خالد",
      role: "زبون منذ 2021",
      rating: 4.5,
      text: "تجربة فريدة من نوعها! قهوة القشر اليمنية هنا هي الأفضل في المنطقة. الأجواء اليمنية التقليدية تزيد من سحر المكان.",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      name: "نورة عبدالله",
      role: "زبونة منذ 2022",
      rating: 5,
      text: "كل زيارة لهذا المقهى تشعرني وكأنني في اليمن! الديكورات التقليدية والقهوة الأصيلة تجعل المكان مميزًا. أنصح بشدة بتجربة قهوة المخا.",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>آراء العملاء</h2>
          <p>انطباعات وتجارب زبائننا الكرام</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-avatar">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </div>
                <div className="client-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;