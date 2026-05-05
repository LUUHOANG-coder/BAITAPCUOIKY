import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import ProductSection from "./ProductSection";
import { categoryData, mensData, womensData } from "../Data/mockData";
import "./Home.css";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) return prev.filter((item) => item.id !== product.id);
      return [...prev, product];
    });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lv-page-wrapper">
      <Header
        isScrolled={isScrolled}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      <Hero />

      <main className="container-fluid px-lg-5 bg-white pb-5">
        <ProductSection
          isCenterTitle
          title="Danh Mục Sáng Tạo"
          data={categoryData}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />

        <ProductSection
          subtitle="DÀNH CHO NAM"
          title="Các thiết kế mới nhất"
          data={mensData}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />

        <section className="extra-bg-section my-5 d-flex align-items-center justify-content-center text-white text-center">
          <div className="hero-overlay"></div>
          <div className="z-index-2 px-3">
            <p className="ls-3 small mb-3 text-uppercase fw-bold">
              Nghệ thuật viễn du
            </p>
            <h2 className="serif-font mb-4 title-huge">Tinh Hoa Chế Tác</h2>
            <button className="btn btn-light rounded-0 px-5 py-3 fw-bold ls-2 bg-hover-white text-dark">
              KHÁM PHÁ NGAY
            </button>
          </div>
        </section>

        <ProductSection
          subtitle="DÀNH CHO NỮ"
          title="Classic Monogram"
          data={womensData}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
