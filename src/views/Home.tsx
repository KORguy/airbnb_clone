import React from "react";
import "../css/Home.css";
// components
import { Header } from "../components/Header";
import { Warningbar } from "../components/Warningbar";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className="Home">
      <Warningbar />
      <Header />
    </div>
  );
};
