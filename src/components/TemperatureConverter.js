import React, { useState } from "react";

const TemperatureConverter = () => {
  let [ temperature, setTemperature ] = useState("");
  const handleTemperature = (valorTecla) => {
    if(valorTecla === "." && temperature.includes(".")) {
      return false;
    }
    if(valorTecla === "-") {
      if(temperature === "") {
        setTemperature(valorTecla);
        return true;
      }
      return false;
    } 
    if(valorTecla === "." && (temperature === "" || temperature === "-")) {
      setTemperature(temperature + "0.");
      return true;
    }
    setTemperature(temperature + valorTecla);
  }
  const handleBackspace = () => {
    temperature = temperature.slice(0, -1);
    setTemperature(temperature);
  }
  const handleConverter = ()  => {
    const resultCelsius = document.querySelector("#celsius-temp");
    const resultFahrenheit = document.querySelector("#fahrenheit-temp");
    const resultKelvin = document.querySelector("#kelvin-temp");
    const fromTemp = document.querySelector("#user-choice").options[document.querySelector("#user-choice").selectedIndex].value;
    console.log(fromTemp);
    let calcTemperature = Number(Number(temperature).toFixed(2));
    let celsiusTemperature = 0;
    let fahrenheitTemperature = 0;
    let kelvinTemperature = 0;
    switch(fromTemp) {
      case "C":
        celsiusTemperature = calcTemperature;
        fahrenheitTemperature = ((calcTemperature * 9) / 5 + 32);
        kelvinTemperature = (calcTemperature + 273.15);
        break;
      case "F":
        celsiusTemperature = (calcTemperature - 32) * 5/9;
        fahrenheitTemperature = calcTemperature;
        kelvinTemperature = ((calcTemperature - 32) * 5/9) + 273.15;
        break;
      case "K":
        celsiusTemperature = (calcTemperature - 273.15) ;
        fahrenheitTemperature = ((calcTemperature - 273.15) * 9/5) + 32;
        kelvinTemperature = calcTemperature;
        break;
    }
    resultCelsius.insertAdjacentHTML("afterbegin",celsiusTemperature);
    resultFahrenheit.insertAdjacentHTML("afterbegin",fahrenheitTemperature);
    resultKelvin.insertAdjacentHTML("afterbegin",kelvinTemperature);
  }
  return (
    <>
      <aside className="areaResultado">
        <input id="user-temp" defaultValue={ temperature } />
        <select id="user-choice">
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>
        <div className="result" id="celsius-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>C
        </span>
        <div className="result" id="fahrenheit-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>F
        </span>
        <div className="result" id="kelvin-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>K
        </span>
        <button className="tecla" id="converter" onClick={() => handleConverter()}>
          Converter
        </button>
      </aside>
      <aside className="areaTeclas">
        <button className="n1 tecla" onClick={() => handleTemperature("1")}>1</button>
        <button className="n2 tecla" onClick={() => handleTemperature("2")}>2</button>
        <button className="n3 tecla" onClick={() => handleTemperature("3")}>3</button>
        <button className="n4 tecla" onClick={() => handleTemperature("4")}>4</button>
        <button className="n5 tecla" onClick={() => handleTemperature("5")}>5</button>
        <button className="n6 tecla" onClick={() => handleTemperature("6")}>6</button>
        <button className="n7 tecla" onClick={() => handleTemperature("7")}>7</button>
        <button className="n8 tecla" onClick={() => handleTemperature("8")}>8</button>
        <button className="n9 tecla" onClick={() => handleTemperature("9")}>9</button>
        <button className="n0 tecla" onClick={() => handleTemperature("0")}>0</button>
        <button className="virgula tecla" onClick={() => handleTemperature(".")}>.</button>
        <button className="limpa tecla" onClick={() => handleBackspace()}></button>
        <button className="negativo tecla" onClick={() => handleTemperature("-")}>-</button>
        <div className="reset tecla">Nova conversão</div>
      </aside>
    </>
  );
};

export default TemperatureConverter;
