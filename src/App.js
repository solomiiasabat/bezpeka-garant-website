import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header/Header.js";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
