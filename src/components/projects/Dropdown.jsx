import React, { useEffect, useRef } from "react";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pref = useRef();
  const handleClick = () => setIsOpen(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pref.current && !pref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div>
      <h1>Dropdown close on outside click</h1>
      <button onClick={handleClick}>
        {isOpen ? "Close Dropdown" : "Open Dropdown"}
      </button>
      {isOpen && (
        <div ref={pref}>
          <p>Ram is boy </p>
        </div>
      )}
    </div>
  );
};
