import Helmet from "react-helmet";
import {
  Contact,
  Footer,
  Header,
  Hero,
  Project,
  ScrollToTop,
  Service,
  Technologies,
} from "../Index";

const Portfolio = () => {
  return (
    <>
      <div
        className="container mx-auto px-4 md:px-32 bg-primary-bgcolor min-h-screen max-w-full"
        style={{ zIndex: 2 }} // Set z-index to 1 for the main container
      >
        <Header />
        <div>
          <Helmet>
            <title> Portfolio | Samuel Doghor </title>

            <meta property="title" content="Portfolio | Samuel Doghor" />
            <meta property="og:title" content="Portfolio | Samuel Doghor" />
            <meta
              property="description"
              content="Software Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences."
            />
            <meta
              property="og:description"
              content="Software Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences"
            />
            <meta property="image" content="/img/doghs.jpg" />
            <meta property="og:image" content="/img/doghs.jpg" />
          </Helmet>
        </div>

        <Hero />
        <Service />
        <Project />
        {/* <Testimonies /> */}
        {/* <BlogComponent /> */}
        <Technologies />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Portfolio;
