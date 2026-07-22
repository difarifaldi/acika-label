import React, { useEffect, useState } from "react";

const DISPLAY_TIME = 1150;
const EXIT_TIME = 450;

export default function LoadingScreen({ onComplete }) {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), DISPLAY_TIME);
    const completeTimer = window.setTimeout(onComplete, DISPLAY_TIME + EXIT_TIME);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`loading-screen${isLeaving ? " loading-screen-leaving" : ""}`}
      role="status"
      aria-label="Memuat Aireta Fashion Manufacturing"
    >
      <div className="loading-screen-glow" />
      <div className="loading-screen-content">
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt="Aireta Fashion Manufacturing"
          className="loading-screen-logo"
        />
        <div className="loading-screen-line" aria-hidden="true">
          <span />
        </div>
        <p>CRAFTING YOUR VISION</p>
      </div>
    </div>
  );
}
