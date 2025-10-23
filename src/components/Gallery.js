import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "ديكور المقهى"
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "مقاعد المقهى"
    },
    {
      src: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "فن صناعة القهوة"
    },
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "مشروبات المقهى"
    },
    {
      src: "https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "البن اليمني"
    },
    {
      src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "القهوة والحلويات"
    }
  ];

  const handleImageClick = () => {
    alert('في التطبيق الحقيقي، سيفتح هذا صورة المعرض في وضع ملء الشاشة');
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>معرض الصور</h2>
          <p>لقطات من أجواء مقهى البن اليمني</p>
        </div>
        
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item" onClick={handleImageClick}>
              <img src={item.src} alt={item.alt} />
              <div className="gallery-overlay">
                <i className="fas fa-search-plus"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;