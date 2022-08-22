import React from "react";
import "./homeScreen.css";

import Married from "./Married";
import Beach1 from "./Beach1";
import Vid3 from "./Vid3";
import TextBox from "./TextBox";

// import { useNavigate } from 'react-router-dom';

function HomeScreen() {
  return (
    <div>
      <Married />
      <TextBox />
      <Beach1 />
      <TextBox />
      <Vid3 />
    </div>
  );
}

export default HomeScreen;
