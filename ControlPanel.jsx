import React from "react";
import "./ControlPanel.css";

function ControlPanel({ isMobile, setIsMobile }) {
  const openTestWindow = (width, height) => {
    window.open(
      window.location.href,
      "_blank",
      `width=${width},height=${height},menubar=no,toolbar=no`,
    );
  };

  return (
    <div
      className="cp-lv-panel bg-dark text-white p-3 shadow-lg"
      style={{
        position: "fixed", // Ghim cố định
        bottom: "20px", // Nằm ở dưới cùng cách 20px
        right: "20px", // Nằm ở góc phải
        zIndex: 9999, // Luôn nổi lên trên cùng
        borderRadius: "10px",
        width: "300px", // Nhỏ gọn
      }}
    >
      <div className="d-flex flex-column gap-2 text-center">
        <h6 className="mb-1" style={{ fontSize: "13px" }}>
          Bảng Điều Khiển Test (LV)
        </h6>

        <div className="d-flex flex-column gap-2">
          <button
            className={`btn btn-sm ${isMobile ? "btn-warning" : "btn-light"}`}
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? "Trở về Desktop 🖥️" : "Test Mobile 📱"}
          </button>

          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-outline-info flex-fill"
              onClick={() => openTestWindow(768, 1024)}
            >
              Tablet 📑
            </button>

            <button
              className="btn btn-sm btn-outline-light flex-fill"
              onClick={() =>
                alert(
                  '1. Kéo nhẹ mép trình duyệt.\n2. Bấm F12 -> "Toggle device toolbar".',
                )
              }
            >
              HD 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
