import React, { useState, useEffect } from "react";
import { Button } from "antd";

// styles

const homepage = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const bkgdImage = {
  backgroundImage: `url("https://wallpapercave.com/wp/wp4439888.jpg")`,
  height: "100vh",
  width: "100vw",
};

// const outset = {
//   height: "800px",
//   width: "1400px",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   borderStyle: "solid",
//   borderColor: "#20b2aa",
//   borderWidth: "20px",
//   borderRadius: "15px 15px 15px 15px",
// };

const heading = {
  color: "#20b2aa",
  fontSize: "60px",
};

const subheading = {
  color: "lightblue",
  fontSize: "30px",
};

const buttondiv = {
  marginTop: "25px",
};

const button = {
  color: "teal",
  fontSize: "20px",
  backgroundColor: "lightblue",
  height: "50px",
  borderRadius: "15px 15px 15px 15px",
};

const catpicture = {
  height: "300px",
  width: "300px",
  borderStyle: "solid",
  borderColor: "#20b2aa",
  borderWidth: "8px",
  borderRadius: "15px 15px 15px 15px",
};

// markup

const fetch = require(`node-fetch`);

const ApiPage = () => {
  const [cat, setCat] = useState("");

  useEffect(() => {
    getCat();
  }, []);

  const getCat = async () => {
    const response = await fetch(`https://aws.random.cat/meow`);
    const data = await response.json();
    setCat(data.file);
    console.log(data.file);
  };

  return (
    <div style={bkgdImage}>
      <main style={homepage}>
        <title>API Cat Image Generator</title>
        {/* <container style={outset}> */}
        <h1 style={heading}>Random Cat Image Generator</h1>
        <p style={subheading}>Hi there! Have kittens, get clickin'</p>
        <img style={catpicture} src={`${cat}`} alt="cat img"></img>
        <div style={buttondiv}>
          <Button style={button} type="secondary" onClick={() => getCat()}>
            More Cats
          </Button>
        </div>
        {/* </container> */}
      </main>
    </div>
  );
};

export default ApiPage;
