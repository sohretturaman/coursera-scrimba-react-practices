/** @format */

import React from "react";
import { FaFacebookSquare, FaTwitter, FaGithubSquare ,FaInstagramSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{flexDirection:'row',marginTop:15}}>
     
      <FaTwitter   color="white" style={{marginRight:10}}/>
      <FaFacebookSquare color="white" style={{marginRight:10}} />
      <FaInstagramSquare  color="white" style={{marginRight:10}}/>
      <FaGithubSquare color="white" style={{marginRight:10}}/>
    </div>
  );
};

export default Footer;
