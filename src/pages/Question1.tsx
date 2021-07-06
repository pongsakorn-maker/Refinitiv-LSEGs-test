import React, { useState, useEffect } from "react";
function Question1() {
  const [input, setInput] = useState<string>("");
  const [selectOption, setSelectOption] = useState<string>("isPrime");
  const [answer, setAnswer] = useState<Boolean>(false);
  const isPrime = (input: number) => {
    if (input === undefined) return setAnswer(false);
    if (input <= 3) return setAnswer(input > 1);
    if (input % 2 === 0 || input % 3 === 0) return setAnswer(false);
    let count = 5;
    while (Math.pow(count, 2) <= input) {
      if (input % count === 0 || input % (count + 2) === 0)
        return setAnswer(false);
      count += 6;
    }
    return setAnswer(true);
  };
  const isFibonacci = (input: number) => {
    if (input === undefined) return setAnswer(false);
    let a = 0;
    let b = 1;
    if (input === a || input === b) return setAnswer(true);
    let c = a + b;
    while (c <= input) {
      if (c === input) return setAnswer(true);
      a = b;
      b = c;
      c = a + b;
    }
    return setAnswer(false);
  };
  useEffect(() => {
    const Calculative = (input: string, selectOption: string) => {
      switch (selectOption) {
        case "isPrime":
          if (input === "" || input === undefined) {
            setAnswer(false);
          } else isPrime(Number(input));
          break;
        case "isFibonacci":
          if (input === "" || input === undefined) {
            setAnswer(false);
          } else isFibonacci(Number(input));
          break;
        default:
          break;
      }
    };
    Calculative(input, selectOption);
  }, [input, selectOption]);
  return (
    <div style={{ display: "flex", overflowX: "scroll", height: "300px" }}>
      <div style={{ width: "200px", minWidth: "200px", border: "2px solid" }}>
        <input
          type="string"
          placeholder="enter any number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <div style={{ minWidth: "100px", width: "100%", border: "2px solid" }}>
        <select
          id="lang"
          onChange={(e) => {
            setSelectOption(e.target.value);
          }}
          value={selectOption}
        >
          <option value="isPrime">isPrime</option>
          <option value="isFibonacci">isFibonacci</option>
        </select>
      </div>
      <div style={{ width: "300px", minWidth: "300px", border: "2px solid" }}>
        {answer ? "true" : "false"}
      </div>
    </div>
  );
}

export default Question1;
