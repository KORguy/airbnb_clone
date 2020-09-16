import React from "react";
import "../css/Header.css";

interface WarningbarProps {}

export const Warningbar: React.FC<WarningbarProps> = ({}) => {
  return (
    <div>
      <p className="top-warning">
        <a href="#">
          에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
        </a>
      </p>
    </div>
  );
};
