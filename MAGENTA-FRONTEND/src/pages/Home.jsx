import { HeroSlider } from "../components/HeroSlider.jsx";
import { AboutSection } from "../components/AboutSection.jsx";
import { ProductSection } from "../components/ProductsSection.jsx";
import { BusinessModelSection } from "../components/BusinessModelSection.jsx";
// import { OperationSection } from "../components/OperationSection.jsx";
import { Counter } from "../components/Counter.jsx";
import { Directors } from "../components/Directors.jsx";
import { InfoSection } from "../components/InfoSection.jsx";
import { Partners } from "../components/Partners.jsx";
import { ProcessSection } from "../components/ProcessSection.jsx";
import {Funders} from "../components/Funders.jsx"
import { Leaders } from "../components/Leaders.jsx";

// force redeploy fix

const Home = () => {
  return (
    <>
      <HeroSlider />
      <AboutSection/>
      <ProductSection/>
      <BusinessModelSection/>
      {/* <OperationSection/> */}
      <Counter/>
      <Directors/>
      <InfoSection/>
      <Partners/>
      <ProcessSection/>
      <Funders/>
      <Leaders/>
    </>
  );
};

export { Home };
