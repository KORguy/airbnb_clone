import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../css/Home.css";
// components
import { Header } from "../components/Header";
import { Warningbar } from "../components/Warningbar";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { CollapsedNavBar } from "../components/CollapsedNavBar";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [navClicked, setNavClicked] = useState<boolean>(false);

  const handleScroll = () => {
    var offset = window.pageYOffset;
    if (offset == 0) {
      setScrolled(false);
      setNavClicked(false);
    } else {
      setScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="Home">
      {!scrolled && <Warningbar />}
      <div className="tp-bnr-image">
        {!scrolled && <Header />}
        {scrolled && (
          <CollapsedNavBar
            navClicked={navClicked}
            setNavClicked={setNavClicked}
          />
        )}
        <div className="top-banner">
          <div className="banner-text">
            <h1 className="banner-title">이제, 여행은 가까운</h1>
            <h1 className="banner-title">곳에서.</h1>
            <p>새로운 곳에서 머물러보세요. 직접 살아보거나, 업무를</p>
            <p>보거나, 휴식할 수 있는 가까운 숙소를 찾아보세요.</p>
            <Link to="/Activity">
              <button className="banner-btn">가까운 여행지 둘러보기</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="middle-cards">
        <Card
          image_src={require("../images/random3.jpeg")}
          title="독특한 공간"
          content="단순한 숙소 이상의 특별함이 담긴 공간"
        />
        <Card
          image_src={require("../images/random2.jpeg")}
          title="온라인 체험"
          content="모두가 함께 즐기는 세계 각지의 독특한 체험"
        />
        <Card
          image_src={require("../images/random3.jpeg")}
          title="집 전체"
          content="일행만을 위한 편한안 공간에서 친구 및 가족과 오붓한 시간을 보내세요."
        />
      </div>
      <Footer />
    </div>
  );
};
