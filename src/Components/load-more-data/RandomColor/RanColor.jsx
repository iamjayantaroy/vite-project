import { useState } from "react";
import "./style.css";

function RanColor() {
  const [typeOfcolor, settypeOfcolor] = useState("hex");
  const [Color, setColor] = useState("#000000");

  function randmUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRanColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randmUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRanRgbColor() {
    const r = randmUtility(256);
    const g = randmUtility(256);
    const b = randmUtility(256);
    console.log(Color);
    setColor(`rgb(${r},${g},${b})`);
  }
  return (
    <>
      <div className="main">
        <div
          className="container"
          style={{
            width: "100vw",
            height: "100vh",
            background: Color,
          }}
        >
          <button onClick={() => settypeOfcolor("hex")}>
            Create Hex Color
          </button>
          <button onClick={() => settypeOfcolor("rgb")}>
            Create rgb Color
          </button>
          <button
            onClick={
              typeOfcolor === "hex"
                ? handleCreateRanColor
                : handleCreateRanRgbColor
            }
          >
            Generate Random Color
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: "30px",
            }}
          >
            <h3>{typeOfcolor === "hex" ? "Hex Color" : "Rgb Color"}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default RanColor;
