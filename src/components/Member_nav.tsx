import React from "react";

interface Member_navProps {
  setMember: React.Dispatch<React.SetStateAction<string>>;
}

export const Member_nav: React.FC<Member_navProps> = ({ setMember }) => {
  return (
    <div className="member_nav">
      <div className="member_nav_text">
        <h1>test text</h1>
      </div>
    </div>
  );
};
