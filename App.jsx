import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ControlPanel from "./chua/ControlPanel.jsx";
import Home from "./chua/Home.jsx";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Bảng điều khiển giả lập */}
      <ControlPanel isMobile={isMobile} setIsMobile={setIsMobile} />

      {/* Khung chứa giao diện */}
      <div
        className={isMobile ? "mobile-wrapper" : "desktop-wrapper"}
        style={{
          width: isMobile ? "390px" : "100%",
          height: isMobile ? "844px" : "auto",
          margin: isMobile ? "40px auto" : "0",
          transition: "all 0.4s ease",
          position: "relative",
          backgroundColor: "#fff",
          minHeight: isMobile ? "auto" : "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: isMobile ? "hidden" : "visible",
          borderRadius: isMobile ? "45px" : "0",
          border: isMobile ? "12px solid #000" : "none",
          boxShadow: isMobile ? "0 20px 60px rgba(0,0,0,0.8)" : "none",
        }}
      >
        {/* Vùng cuộn của ứng dụng */}
        <div
          className="app-scroll-container"
          style={{
            width: "100%",
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            position: "relative",
          }}
        >
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
