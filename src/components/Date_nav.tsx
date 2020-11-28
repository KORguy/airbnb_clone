import React from "react";

interface Date_navProps {
  setArrDate: React.Dispatch<React.SetStateAction<string>>;
  setDepDate: React.Dispatch<React.SetStateAction<string>>;
}

export const Date_nav: React.FC<Date_navProps> = ({
  setArrDate,
  setDepDate,
}) => {
  return (
    <div className="date_nav">
      <div className="date_nav_text">
        <h1>Calnder Area</h1>
      </div>
    </div>
  );
};
