import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
