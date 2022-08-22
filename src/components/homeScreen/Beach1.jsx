import React from "react";
import { Parallax } from "react-parallax";
import beach1 from "./vids/beach1.jpg"


const Beach1 = () => (
  <Parallax className="image" bgImage={beach1} strength={800}>
    <div className="content">
      <span className="img-txt">Blah Blah</span>
    </div>
  </Parallax>
);

export default Beach1;