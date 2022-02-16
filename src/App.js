import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import Navigation from "./components/Navigation";

import "./App.css";

const sections = [
  { name: "Home", href: "#home" },
  {
    name: "About",
    href: "#about",
  },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function App() {
  return (
    <BrowserRouter>
      <Navigation sections={sections} />
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
