import React from "react";

const HeaderModals = ({
  activeModal,
  setActiveModal,
  favorites,
  toggleFavorite,
}) => {
  return (
    <>
      {activeModal === "favorites" && (
        <div
          className="modal-overlay bg-white text-dark h-100 d-flex flex-column shadow-lg"
          style={{
            position: "absolute",
            width: "100%",
            maxWidth: "400px",
            right: "0",
            top: "0",
            zIndex: 1060,
          }}
        >
          <div className="p-4 border-bottom d-flex justify-content-between align-items-center bg-light">
            <h4 className="serif-font m-0 fs-5">
              Sản phẩm Yêu thích ({favorites.length})
            </h4>
            <button
              className="btn-close"
              onClick={() => setActiveModal(null)}
            ></button>
          </div>
          <div className="flex-grow-1 overflow-auto p-4">
            {favorites.length === 0 ? (
              <div className="text-center mt-5 text-muted">
                <h1 className="display-1 opacity-25 mb-3">♡</h1>
                <p>Bạn chưa lưu sản phẩm nào.</p>
                <button
                  className="btn btn-dark rounded-0 px-4 mt-3"
                  onClick={() => setActiveModal(null)}
                >
                  MUA SẮM NGAY
                </button>
              </div>
            ) : (
              favorites.map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center mb-4 pb-3 border-bottom position-relative"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: "90px",
                      height: "90px",
                      objectFit: "contain",
                    }}
                    className="me-3 bg-light p-2"
                  />
                  <div className="flex-grow-1 pe-4">
                    <p className="fw-bold mb-1 small text-uppercase lh-sm">
                      {item.name}
                    </p>
                    <p className="text-muted small fw-bold mb-2">
                      {item.price || "Liên hệ"}
                    </p>
                    <button
                      className="btn btn-dark btn-sm rounded-0 w-100"
                      style={{ fontSize: "10px", letterSpacing: "1px" }}
                    >
                      THÊM VÀO GIỎ
                    </button>
                  </div>
                  <button
                    onClick={() => toggleFavorite(item)}
                    className="btn text-danger position-absolute top-0 end-0 p-2 border-0 bg-transparent fs-5"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {activeModal === "menu" && (
        <div
          className="modal-overlay bg-white text-dark w-100 h-100"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: 1040,
            paddingTop: "70px",
          }}
        >
          <div className="container px-4 py-4">
            <h5 className="text-muted ls-2 small mb-4">DANH MỤC CHÍNH</h5>
            <ul className="list-unstyled fs-4 lh-lg serif-font">
              <li className="border-bottom py-3 cursor-pointer d-flex justify-content-between align-items-center hover-gold">
                <span>Túi xách & Phụ kiện Nữ</span>{" "}
                <span className="fs-6">›</span>
              </li>
              <li className="border-bottom py-3 cursor-pointer d-flex justify-content-between align-items-center hover-gold">
                <span>Thời trang Nam</span> <span className="fs-6">›</span>
              </li>
              <li className="border-bottom py-3 cursor-pointer d-flex justify-content-between align-items-center hover-gold">
                <span>Nước hoa & Mỹ phẩm</span> <span className="fs-6">›</span>
              </li>
              <li
                className="py-3 mt-4 text-center text-decoration-underline small cursor-pointer text-muted"
                onClick={() => setActiveModal(null)}
              >
                Đóng
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeModal === "search" && (
        <div
          className="modal-overlay bg-white text-dark w-100 shadow-sm"
          style={{
            position: "absolute",
            top: "60px",
            left: "0",
            height: "35vh",
            zIndex: 1040,
          }}
        >
          <div className="container d-flex flex-column justify-content-center h-100 position-relative">
            <button
              className="btn-close position-absolute top-0 end-0 mt-3 me-3"
              onClick={() => setActiveModal(null)}
            ></button>
            <h3 className="serif-font text-center mb-4">Bạn muốn tìm gì?</h3>
            <div
              className="input-group input-group-lg w-100 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              <input
                type="text"
                className="form-control rounded-0 border-dark shadow-none"
                placeholder="Ví, Túi xách, Áo khoác..."
              />
              <button className="btn btn-dark rounded-0 px-4 fw-bold">
                TÌM
              </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === "login" && (
        <div
          className="modal-overlay w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            background: "rgba(0,0,0,0.7)",
            zIndex: 1060,
          }}
        >
          <div
            className="bg-white p-5 position-relative modal-box"
            style={{ width: "90%", maxWidth: "400px" }}
          >
            <button
              className="btn-close position-absolute top-0 end-0 m-3 p-2"
              onClick={() => setActiveModal(null)}
            ></button>
            <h3 className="serif-font text-center mb-4">Tài khoản</h3>
            <input
              type="email"
              className="form-control mb-3 rounded-0 p-3 shadow-none"
              placeholder="Email của bạn"
            />
            <input
              type="password"
              className="form-control mb-4 rounded-0 p-3 shadow-none"
              placeholder="Mật khẩu"
            />
            <button className="btn btn-dark w-100 py-3 rounded-0 fw-bold ls-2">
              ĐĂNG NHẬP
            </button>
            <p className="text-center mt-4 small text-decoration-underline cursor-pointer">
              Bạn quên mật khẩu?
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderModals;
