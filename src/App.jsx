import {
  Header,
  Hero,
  Service,
  Project,
  Technologies,
  Contact,
  Footer,
  ScrollToTop,
} from "./components/Index";
import AOS from "aos";
import "aos/dist/aos.css";
// import Galaxy from "./Galaxy";

AOS.init();

const App = () => {
  return (
    <>
      <div
        className="container mx-auto px-8 md:px-32 bg-gradient-to-r from-zinc-800 to-zinc-950 min-h-screen max-w-full"
        style={{ zIndex: 2 }} // Set z-index to 1 for the main container
      >
        <Header />
        <Hero />
        <Service />
        <Project />
        <Technologies />
        {/* <Testimonies /> */}
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
      {/* <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
        }} // Set pointer-events to none
      >
        <Galaxy />
      </div> */}
    </>
  );
};

export default App;
