import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main/Main.js";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
