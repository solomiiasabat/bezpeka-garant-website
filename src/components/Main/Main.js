import AboutCompany from "./components/AboutCompany";
import Services from "./components/Services";
import SecuritySystems from "./components/SecuritySystems/SecuritySystems";
import Prices from "./components/Prices";

export default function Main() {
  return (
    <div className="Main">
      <AboutCompany />
      <Services />
      <Prices />
      <SecuritySystems />
    </div>
  );
}
