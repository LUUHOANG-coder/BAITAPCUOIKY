import React from "react";

const ProductCard = ({ product, favorites, toggleFavorite }) => {
  if (!product) return null;

  // Kiểm tra xem sản phẩm có nằm trong danh sách yêu thích không
  const isFavorite = favorites?.some((fav) => fav.id === product.id);

  return (
    <div className="product-card-item">
      {/* Khung chứa ảnh: Đã được fix tỷ lệ aspect-ratio trong CSS */}
      <div className="product-img-container position-relative">
        <img
          src={product.img}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
        />

        {/* Nút yêu thích (Trái tim) */}
        <button
          className={`btn position-absolute top-0 end-0 m-2 z-index-2 ${
            isFavorite ? "text-danger" : "text-muted"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(product);
          }}
          style={{
            background: "transparent",
            border: "none",
            fontSize: "1.2rem",
            outline: "none",
            boxShadow: "none",
          }}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      {/* Thông tin sản phẩm bên dưới ảnh */}
      <div className="mt-2">
        <p
          className="product-name fw-medium mb-1"
          style={{ fontSize: "15px", color: "#19110b" }}
        >
          {product.name}
        </p>
        {product.price && (
          <p className="text-muted small text-uppercase ls-1">
            {product.price}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
