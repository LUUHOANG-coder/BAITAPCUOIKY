import React, { useState } from "react";
import HeaderModals from "./HeaderModals";

const Header = ({ isScrolled, favorites, toggleFavorite }) => {
  const [activeModal, setActiveModal] = useState(null);
  const toggleModal = (modalName) =>
    setActiveModal(activeModal === modalName ? null : modalName);

  return (
    <>
      <nav
        className="navbar sticky-top px-2 px-lg-4 py-2 transition-all text-dark shadow-sm border-bottom"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/white-diamond.png")',
          backgroundSize: "cover",
          backgroundColor: "#fff",
        }}
      >
        <div className="d-flex w-100 align-items-center justify-content-between">
          <div
            className="d-flex align-items-center"
            style={{ flex: 1, gap: "15px" }}
          >
            <div
              className="d-flex align-items-center cursor-pointer py-1"
              onClick={() => toggleModal("menu")}
            >
              <span
                className={`lv-burger ${activeModal === "menu" ? "open" : ""}`}
                style={{ color: "#000" }}
              ></span>
              <span className="small-label fw-bold d-none d-lg-block ms-2">
                MENU
              </span>
            </div>
            <div
              className="d-flex align-items-center cursor-pointer py-1"
              onClick={() => toggleModal("search")}
            >
              <span
                className="fs-4"
                style={{
                  color: activeModal === "search" ? "#d4af37" : "#000",
                  lineHeight: 1,
                }}
              >
                ⌕
              </span>
              <span className="small-label fw-bold d-none d-lg-block ms-1">
                TÌM KIẾM
              </span>
            </div>
          </div>
          <div
            className="text-center"
            style={{ flex: 1, whiteSpace: "nowrap" }}
          >
            <h1
              className="lv-brand-title m-0 cursor-pointer text-dark"
              onClick={() => setActiveModal(null)}
            >
              LOUIS VUITTON
            </h1>
          </div>
          <div
            className="d-flex align-items-center justify-content-end"
            style={{ flex: 1, gap: "15px" }}
          >
            <span className="small-label fw-bold d-none d-lg-block cursor-pointer">
              LIÊN HỆ
            </span>
            <span
              className="fs-4 cursor-pointer position-relative text-dark py-1"
              style={{ lineHeight: 1 }}
              onClick={() => toggleModal("favorites")}
            >
              ♡
              {favorites?.length > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger d-flex align-items-center justify-content-center"
                  style={{
                    width: "16px",
                    height: "16px",
                    fontSize: "9px",
                    padding: 0,
                    marginTop: "5px",
                    marginLeft: "-5px",
                  }}
                >
                  {favorites.length}
                </span>
              )}
            </span>
            <div
              className="d-flex align-items-center cursor-pointer py-1"
              onClick={() => toggleModal("login")}
            >
              <span
                className="small-label fw-bold d-none d-lg-block me-1"
                style={{ color: activeModal === "login" ? "#d4af37" : "#000" }}
              >
                TÀI KHOẢN
              </span>
              <span className="fs-5 d-inline-block d-lg-none text-dark">
                👤
              </span>
            </div>
          </div>
        </div>
      </nav>
      {/* Component chứa toàn bộ Popup */}
      <HeaderModals
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
};

export default Header;
