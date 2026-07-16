import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import Hero from "./components/sections/hero";
import Mystery from "./components/sections/Mystery";
import Rewards from "./components/sections/Rewards";
import EngineerWall from "./components/sections/EngineerWall";
import Vision from "./components/sections/Vision";
import Cta from "./components/sections/Cta";

const App = () => {
  return (
    <div className="h-screen bg-background text-foreground p-2">
      <Navbar />
      <Hero />
      <Mystery />
      <Rewards />
      <EngineerWall />
      <Vision />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
