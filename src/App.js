import React, { useRef } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Events from "./Events";
import Music from "./Music";

const App = () => {
  const musicSectionRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const socialSectionRef = useRef(null);

  return (
    <div>
      <Navbar
        musicSectionRef={musicSectionRef}
        eventsSectionRef={eventsSectionRef}
        socialSectionRef={socialSectionRef}
      />
      <Header />
      <Music musicSectionRef={musicSectionRef} />
      <Events eventsSectionRef={eventsSectionRef} />
      <Footer socialSectionRef={socialSectionRef} />
    </div>
  );
};

export default App;
