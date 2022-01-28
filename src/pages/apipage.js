import React, {useState, useEffect} from "react";
import CORS from 'cors'

const fetch = require(`node-fetch`)



const ApiPage = () => {

  const [duck, setDuck] = useState('');

useEffect(() => {
 getDuck();
}, []);

  const getDuck = async () => {
    const response = await fetch(`https://aws.random.cat/meow`)
    const data = await response.json();
    setDuck(data.file);
console.log(data.file)
    };

  return (
    <main>
      <title>API Duck Image Generator</title>
      <h1>Random Duck Image Generator</h1>
      {/* <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p> */}
<img src={`${duck}`} alt="cat img"></img>
    </main>
  );
};

export default ApiPage;