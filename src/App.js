import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home/home";
import Main from "./page/main";
import Settings from "./page/settings/settings";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Main />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
