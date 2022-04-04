import logo from "./logo.svg";
import "./App.css";
import { Router } from "./componenets/router";
import { Header } from "./componenets/header";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
