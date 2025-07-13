import React, { useRef, useState } from "react";

const OtpInput = () => {
  const length = 4;
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (e, idx) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (!value) return;
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);
    if (idx < length - 1) {
      inputsRef.current[idx + 1].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    console.log(otp[idx]);

    if (e.key === "Backspace" && otp[idx] && idx >= 0) {
      const newOtp = [...otp];
      newOtp[idx] = "";
      setOtp(newOtp);
      if (idx >= 1) {
        inputsRef.current[idx - 1].focus();
      }
    }
  };

  return (
    <div>
      <h1>Otp input</h1>
      <div style={{ marginBottom: "20px" }}>
        {otp.map((digit, idx) => (
          <input
            key={idx}
            ref={(el) => (inputsRef.current[idx] = el)}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            style={{ width: "2em", marginRight: "5px", textAlign: "center" }}
          />
        ))}
      </div>
    </div>
  );
};

export default OtpInput;
