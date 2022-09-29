import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Button, Background, BoxShadow, Grid, Flex } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/button" element={<Button />} />
        <Route path="/background" element={<Background />} />
        <Route path="/BoxShadow" element={<BoxShadow />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/flex" element={<Flex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
