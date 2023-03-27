import "./App.css";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Productlist from "./components/productlist/Productlist";

import Contact from "./components/contact/Contact";
import Toggle from "./toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Productlist />
      <Contact />
    </div>
  );
};

export default App;
