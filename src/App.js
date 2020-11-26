import { BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Background from "./components/Background.js";

function App() {
  return (
    <BrowserRouter>
      <Background />
    </BrowserRouter>
  );
}

export default App;
