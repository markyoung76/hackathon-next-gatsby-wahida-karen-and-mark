import * as React from "react";
import { Link } from "gatsby"
import { Button } from "antd";

const IndexPage = () => {
  return (
    <main>
      <title>API Duck Image Generator</title>
      <h1>A Home For All Ducks</h1>
      <p>No duck is ever left behind...</p>
      <button>
      <Link to="/apipage">Click for Ducks</Link>
      </button>
      <Button type="secondary">Primary</Button>
    </main>
  );
};

export default IndexPage;