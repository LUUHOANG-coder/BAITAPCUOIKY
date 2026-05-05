import React from "react";

const Hero = () => {
  return (
    <section className="lv-hero position-relative d-flex align-items-center justify-content-center text-center text-white">
      <div className="hero-overlay"></div>
      <div className="hero-content z-index-2 px-3">
        <p className="ls-3 small mb-3 text-uppercase fw-bold">Bộ sưu tập Hè</p>
        <h2 className="serif-font mb-4 title-huge">Flight Mode</h2>
        <button className="btn btn-outline-light rounded-0 px-5 py-3 fw-bold ls-2 bg-hover-white text-hover-dark transition-all">
          KHÁM PHÁ CÁC SÁNG TẠO
        </button>
      </div>
    </section>
  );
};

export default Hero;
