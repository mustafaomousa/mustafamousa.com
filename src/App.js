import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import Main from "./components/Main";
import Navigation from "./components/Navigation";

import "./App.css";

const sections = [
  { name: "Home" },
  { name: "About" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Contact" },
];

function App() {
  return (
    <BrowserRouter>
      <Navigation sections={sections} />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
