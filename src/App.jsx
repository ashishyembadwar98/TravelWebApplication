import { useEffect } from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default App;
