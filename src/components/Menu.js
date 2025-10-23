import React, { useState } from 'react';

const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);

  const menuItems = [
    {
      name: "قهوة المخا",
      description: "أجود أنواع القهوة اليمنية من منطقة المخا التاريخية",
      price: "20 ر.س",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "قهوة القشر",
      description: "مشروب تقليدي من قشور البن اليمني مع الزنجبيل",
      price: "18 ر.س",
      image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "قهوة الحمام",
      description: "قهوة يمنية مميزة بطعمها الغني ورائحتها الزكية",
      price: "22 ر.س",
      image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "قهوة مطحونة",
      description: "قهوة يمنية مطحونة طازجة مع الهيل والزعفران",
      price: "25 ر.س",
      image: "https://images.unsplash.com/photo-1522992319-0365e5f11656?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "قهوة مثلجة",
      description: "قهوة المخا اليمنية المثلجة مع حليب المكسرات",
      price: "24 ر.س",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "شاي عدني",
      description: "الشاي العدني التقليدي مع الحليب والبهارات",
      price: "18 ر.س",
      image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const tabs = ["القهوة الساخنة", "القهوة الباردة", "الشاي اليمني", "المأكولات"];

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-title light">
          <h2>قائمة المشروبات</h2>
          <p>استكشف تشكيلتنا المميزة من القهوة اليمنية الأصيلة</p>
        </div>
        
        {/* <div className="menu-tabs">
          {tabs.map((tab, index) => (
            <button 
              key={index}
              className={`tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div> */}
        
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <div className="menu-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="menu-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;