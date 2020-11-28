import React from "react";

interface Location_navProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

export const Location_nav: React.FC<Location_navProps> = ({ setLocation }) => {
  return (
    <div className="location_nav" onClick={() => setLocation("가까운 여행지")}>
      <div className="location_nav_text">
        <p>가까운 여행지 둘러보기</p>
      </div>
    </div>
  );
};
