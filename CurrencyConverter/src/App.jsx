import React from "react";
import "./App.css";
import { InputBox } from "./Components/InputBox.jsx";
import useCurrencyInfo from "./hookss/useCurrencyhok";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [two, setTwo] = useState("inr");
  const [converted, setConverted] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const Options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTwo(from);
    setConverted(converted);
  };

  const convert = () => {
    setConverted(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={Options}
                onCurrencyChange={(currency) => {
                  setAmount(amount);
                  selectCurrency = { from };
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="Two"
                amount={converted}
                currencyOptions={Options}
                onCurrencyChange={(currency) => {
                  setTwo(currency);
                  selectCurrency = { from };
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toLowerCase()} to {two.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
