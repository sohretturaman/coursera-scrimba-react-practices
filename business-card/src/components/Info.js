/** @format */

import React from "react";
import ReusableButton from "./ReusableButton";
import image from "./profilejpg.jpg";
const Info = () => {
  const handleButtonClick = (backgroundColor) => {
    // Logic to handle button click based on background color
    console.log(`Button with ${backgroundColor} background clicked`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div style={{ marginTop: 10 }}>
        <img
          src="https://picsum.photos/id/64/200/300"
          alt="pic"
          style={{
            objectFit: "cover",
            width: 200,
            height: 140,
            borderRadius: 10,
          }}
        />
      </div>
      <div>
        <div style={{ color: "white", margin: 5, marginTop: 10 }}>
          Meryem Sohret TURAMAN
        </div>
        <div style={{ color: "#EF6C00", fontSize: 12 }}>
          React.js / React-native Developer
        </div>
        <small style={{ color: "white", fontSize: 10 }}> contact with me</small>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <ReusableButton
            backgroundColor="white"
            textColor="black"
            onClick={() => handleButtonClick("white")}
            buttonText="Email"
          />
          <ReusableButton
            backgroundColor="blue"
            textColor="white"
            onClick={() => handleButtonClick("blue")}
            buttonText="LinkedIn"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;

{
  /*         <img src='https://picsum.photos/id/64/200/300
' alt ='pic'  style={{objectFit:'cover'}}/> */
}
