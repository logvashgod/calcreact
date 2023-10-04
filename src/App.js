import React, { useState } from "react";
import CalcButton from "./components/CalcButton";
import CalcOutput from "./components/CalcOutput";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const displayInp = (value) => {
    return setInput((prevInp) => prevInp + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(input);
      setResult(result);
    } catch (error) {
      setResult("Ошибка");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };
  return (
    <div className="App">
      <div>
        <CalcOutput input={input} result={result} />
      </div>
      <CalcButton text="1" value="1" displayImp={displayInp} />
      <CalcButton text="2" value="2" displayImp={displayInp} />
      <CalcButton text="3" value="3" displayImp={displayInp} />
      <br />
      <CalcButton text="4" value="4" displayImp={displayInp} />
      <CalcButton text="5" value="5" displayImp={displayInp} />
      <CalcButton text="6" value="6" displayImp={displayInp} />
      <br />
      <CalcButton text="7" value="7" displayImp={displayInp} />
      <CalcButton text="8" value="8" displayImp={displayInp} />
      <CalcButton text="9" value="9" displayImp={displayInp} />
      <br />
      <CalcButton text="0" value="0" displayImp={displayInp} />
      <br />
      <hr />
      <CalcButton text="+" value="+" displayImp={displayInp} />
      <CalcButton text="-" value="-" displayImp={displayInp} />

      <br />
      <CalcButton text="×" value="*" displayImp={displayInp} />
      <CalcButton text="÷" value="/" displayImp={displayInp} />
      <hr />
      <CalcButton
        text="="
        value="="
        displayImp={displayInp}
        calculateResult={calculateResult}
      />
      <CalcButton text="C" value="C" clearInput={clearInput} />
    </div>
  );
}

export default App;
