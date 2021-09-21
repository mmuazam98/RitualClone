import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Shop from "./components/Shop";
import WhoWeAre from "./components/WhoWeAre";
import Trace from "./components/Trace";
import Featured from "./components/Featured";
import More from "./components/More";
import Team from "./components/Team";
import MakeYourSelf from "./components/MakeYourSelf";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Shop />
      <WhoWeAre />
      <Trace />
      <Featured />
      <More />
      <Team />
      <MakeYourSelf />
      <Footer />
    </>
  );
};

export default App;
