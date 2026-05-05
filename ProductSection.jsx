import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({
  title,
  subtitle,
  data,
  favorites,
  toggleFavorite,
  isCenterTitle,
}) => {
  return (
    <section className="section-py mt-4">
      {isCenterTitle ? (
        <h3 className="text-center serif-font fw-normal mb-5 title-responsive">
          {title}
        </h3>
      ) : (
        <div className="mb-4">
          <span className="text-muted small ls-2 d-block mb-2">{subtitle}</span>
          <h3 className="serif-font fw-normal title-responsive">{title}</h3>
        </div>
      )}

      <div className="horizontal-scroll no-scrollbar pb-3">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
