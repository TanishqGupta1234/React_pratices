import { useState, useCallback, useEffect, useRef } from "react";
import React from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  // ref hook

  const PasswordRef = useRef(null);

  const passwordGenerator =useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz";

      if (numberAllowed) str += "0123456789";
      if (CharAllowed) str += "!@#$%^&*()-_=+{};[1]:',./?|";

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);
    }, [length, numberAllowed, CharAllowed, setPassword]);

    const copyPassword = useCallback(() => {
      PasswordRef.current?.select()
      window.navigator.clipboard.writeText(Password)
    }, 
    [Password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, CharAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-6 my-12 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
        {/* Password Input and Copy Button */}
        <div className="flex items-center justify-between bg-white rounded-md overflow-hidden mb-6 px-3 py-2">
          <input
            type="text"
            value={Password}
            className="w-full bg-transparent text-black text-lg font-medium outline-none"
            placeholder="Generated Password"
            readOnly
            ref={PasswordRef}
          />
          <button 
          onClick={copyPassword}
          className="ml-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-1 rounded transition-all duration-200">
            Copy
          </button>
        </div>

        {/* Range Slider */}
        <div className="flex flex-col gap-2 text-sm text-white mb-4">
          <label htmlFor="rangeInput" className="font-medium">
            Password Length: <span className="font-bold">{length}</span>
          </label>
          <input
            id="rangeInput"
            type="range"
            min={6}
            max={50}
            value={length}
            className="w-full accent-orange-700 cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className="accent-white scale-125"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="font-medium">
              Include Numbers
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={CharAllowed}
              id="characterInput"
              className="accent-white scale-125"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput" className="font-medium">
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


// useCallback is a React Hook that remembers a function — so React doesn't recreate it again and again when your component re-renders.