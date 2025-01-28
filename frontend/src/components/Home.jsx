import React, { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [extensionData, setextensionData] = useState("");



  const handleExtension = () => {
    const windowProps = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, width=1200, height=800`;
    const popup = window.open(
      "http://localhost:5173/popup",
      "Pop up window",
      windowProps
    );
    popup?.postMessage("message", "http://localhost:5173");
  };

  const handleClear = () => {
    setextensionData("");
  };




  useEffect(() => {
    const childResponse = (event) => {
      if (event?.data) {
        setextensionData(event.data);
      }
    };

    window.addEventListener("message", childResponse);
    return () => window.removeEventListener("message", childResponse);
  }, []);




  return (
    <>
      <h1>Parent Window</h1>
      <button onClick={handleExtension}> Extension </button>
      <button onClick={handleClear}>Clear</button>
      <h3>{extensionData.length>0 ? `hello ${extensionData}` : "No responses from child"}</h3>
    </>
  );
};

export default Home;
