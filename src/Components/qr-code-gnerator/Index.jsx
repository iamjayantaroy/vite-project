import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";

export default function QrcodeG() {
  const [qrcode, setqrcode] = useState("");
  const [input, setinput] = useState("");

  function handlegqr() {
    setqrcode(input);
  }
  return (
    <div className="container">
      <div className="inner-container">
        <h1>QR Code Generator</h1>
        <div className="input-container">
          <input
            onChange={(e) => setinput(e.target.value)}
            type="text"
            placeholder="Enter your link here..."
            name="qr-code"
          />
          <button
            disabled={input && input.trim() !== "" ? false : true}
            onClick={handlegqr}
          >
            Generate
          </button>
        </div>
        <div className="qr-code">
          <QRCode className="qr" id="qr-code-value" value={qrcode}></QRCode>
        </div>
      </div>
    </div>
  );
}
