import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/Routes";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
