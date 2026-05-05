import React from "react";

import "./ProductGrid.css";

function ProductGrid() {
  const products = [
    { id: 1, name: "Túi xách nữ", img: "path/to/your/lv-bag-female-1.jpg" },
    {
      id: 2,
      name: "Phụ kiện bằng da cho nữ",
      img: "path/to/your/lv-wallet-female-1.jpg",
    },
    {
      id: 3,
      name: "Phụ kiện thời trang cho nữ",
      img: "path/to/your/lv-charm-female-1.jpg",
    },
    { id: 4, name: "Giày nữ", img: "path/to/your/lv-shoes-female-1.jpg" },
    { id: 5, name: "Túi xách nam", img: "path/to/your/lv-bag-male-1.jpg" },
    {
      id: 6,
      name: "Ví và phụ kiện bằng da cho nam",
      img: "path/to/your/lv-wallet-male-1.jpg",
    },
    {
      id: 7,
      name: "Phụ kiện thời trang cho nam",
      img: "path/to/your/lv-cap-male-1.jpg",
    },
    { id: 8, name: "Nước hoa", img: "path/to/your/lv-perfume-1.jpg" },
  ];

  return (
    <div className="lv-product-section">
      <div className="lv-section-header">
        <h2>
          Khám phá các sáng tạo độc đáo
          <br />
          của Louis Vuitton
        </h2>
      </div>
      <div className="lv-product-grid">
        {products.map((product) => (
          <div key={product.id} className="lv-product-card">
            <div className="lv-img-container">
              <img src={product.img} alt={product.name} />
            </div>
            <p className="lv-product-name">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
