import React from "react";

import { SubHeading } from "../../components";
import constants from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={constants.images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={constants.images.quote} alt="" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <p className="p__opensans">
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Lou</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={constants.images.sign} alt="sign" />
      </div>
    </div>
  </div>
);
export default Chef;
