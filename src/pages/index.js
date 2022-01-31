import * as React from "react";
import { Link } from "gatsby";
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

// markup

const IndexPage = () => {
  return (
    <div style={bkgdImage}>
      <main style={homepage}>
        <title>API Cat Image Generator</title>
        <h1 style={heading}>A Home For All Cats</h1>
        <p style={subheading}>No cat is ever left behind...</p>
        <div style={buttondiv}>
          <Button style={button} type="secondary">
            <Link to="/apipage">Click for Cats</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
