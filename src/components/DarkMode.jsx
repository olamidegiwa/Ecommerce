import React from "react";
import lightButton from "../assets/image/images.jpg";
import darkButton from "../assets/image/images.jpg";
import { FaMoon } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "Light");
    }
  }, [theme]);
  return (
    <div className="relative">
      <FaRegMoon
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer transition-all duration-300 absolute right-0 z-10"
      />

      {/* <img
        src={lightButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer
         drop-shadow-
         [1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10  "
      /> */}

      <FaMoon
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer transition-all duration-300"
      />
      {/* <img
        src={darkButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-
        [1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      /> */}
    </div>
  );
};

export default DarkMode;
