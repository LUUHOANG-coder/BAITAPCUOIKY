import React from "react";

const Footer = () => {
  return (
    <footer className="footer-dark-bg text-secondary py-5">
      <div className="container-fluid px-lg-5 py-4">
        <div className="row g-5 border-bottom border-secondary pb-5 mb-5 mx-0">
          <div className="col-12 col-md-4 col-lg-3 text-center text-lg-start">
            <h6 className="text-white mb-4 ls-2 small">HỖ TRỢ</h6>
            <ul className="list-unstyled small opacity-75 lh-lg">
              <li>Câu hỏi thường gặp</li>
              <li>Chăm sóc sản phẩm</li>
              <li>Cửa hàng</li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-3 text-center text-lg-start">
            <h6 className="text-white mb-4 ls-2 small">DỊCH VỤ</h6>
            <ul className="list-unstyled small opacity-75 lh-lg">
              <li>Dịch vụ bảo hành</li>
              <li>Cá nhân hóa</li>
              <li>Nghệ thuật tặng quà</li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-3 text-center text-lg-start">
            <h6 className="text-white mb-4 ls-2 small">VỀ LOUIS VUITTON</h6>
            <ul className="list-unstyled small opacity-75 lh-lg">
              <li>Buổi trình diễn thời trang</li>
              <li>La Maison</li>
              <li>Nghề nghiệp</li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 text-center text-lg-end mt-5 mt-lg-0">
            <h6 className="text-white mb-4 ls-2 small">VIỆT NAM</h6>
            <p className="small mb-0">🇻🇳 VN / Tiếng Việt</p>
          </div>
        </div>
        <div className="footer-logo-wrap text-center py-4">
          <h2 className="serif-font text-white opacity-25 ls-10 display-4 m-0">
            LOUIS VUITTON
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
