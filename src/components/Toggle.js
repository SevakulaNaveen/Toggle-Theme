import { useState } from "react";
import "../styles/toggle.css";

// using arrow function to create a functional component
const Toggle = () => {
  //declaring a state variable isDarkMode using the useState Hook and initializing the state with defalut value of false
  //setIsDarkMode is the function that allows us to update the state varibale i.e, isDarkMode
  const [isDarkMode, setIsDarkMode] = useState(false);

  //to handle onClick event we are creating a function handleTheme which is responsible to update the theme when user click the toggle theme button
  const handleTheme = () => {
    //updating the stateVarible using setIsDarkMode function
    setIsDarkMode((currengtMode) => !currengtMode);
  };
  return (
    <div
      className={isDarkMode ? "dark-theme" : "light-theme"}
      style={{ textAlign: "center" }}
    >
      <p>{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
      <button onClick={handleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Toggle;
