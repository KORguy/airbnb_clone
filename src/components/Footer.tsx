import React from "react";
import "../css/Footer.css";
import LanguageIcon from "@material-ui/icons/Language";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="footer">
      <div className="lists">
        <ul>
          <li>소개</li>
          <li>
            <a>에어비엔비 이용 방법</a>
          </li>
          <li>
            <a>에어비엔비 플러스</a>
          </li>
          <li>
            <a>에어비엔비 Luxe</a>
          </li>
          <li>
            <a>호텔투나잇</a>
          </li>
          <li>
            <a>에어비엔비 비즈니스 프로그램</a>
          </li>
          <li>
            <a>올림픽</a>
          </li>
          <li>
            <a>채용정보</a>
          </li>
        </ul>
        <ul>
          <li>커뮤니티</li>
          <li>
            <a>다양성 및 소속감</a>
          </li>
          <li>
            <a>접근성</a>
          </li>
          <li>
            <a>에어비엔비 어소시에이트</a>
          </li>
          <li>
            <a>구호인력을 위한 숙소</a>
          </li>
          <li>
            <a>친구 초대하기</a>
          </li>
        </ul>
        <ul>
          <li>호스팅하기</li>
          <li>
            <a>숙소 호스팅</a>
          </li>
          <li>
            <a>온라인 체험 호스팅하기</a>
          </li>
          <li>
            <a>체험 호스팅하기</a>
          </li>
          <li>
            <a>브라이언 체스키 CEO의 한마디</a>
          </li>
          <li>
            <a>책임감 있는 호스팅</a>
          </li>
          <li>
            <a>Open Homes</a>
          </li>
          <li>
            <a>자료 센터</a>
          </li>
          <li>
            <a>커뮤니티 센터</a>
          </li>
        </ul>
        <ul>
          <li>에어비엔비 지원</li>
          <li>
            <a>코로나19 관련 업데이트</a>
          </li>
          <li>
            <a>도움말 센터</a>
          </li>
          <li>
            <a>예약 취소 옵션</a>
          </li>
          <li>
            <a>에어비엔비 이웃 민원 지원</a>
          </li>
          <li>
            <a>신뢰와 안전</a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="bottom_footer">
        <p>
          © 2020 Airbnb, Inc. All rights reserved . <a>개인정보 처리방침</a> .{" "}
          <a>이용약관</a> . <a>사이트맵</a> . <a>한국의 변경된 환불 정책</a>
        </p>
        <div style={{ display: "flex" }}>
          <IconButton size="small">
            <LanguageIcon />
            <p> 한국어(KR)</p>
          </IconButton>
          <p> ₩ KRW </p>
          <FontAwesomeIcon icon="facebook-f" />
          <FontAwesomeIcon icon="twitter" />
          <FontAwesomeIcon icon="instagram-square" />
        </div>
      </div>
    </div>
  );
};
