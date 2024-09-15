import MaintenanceMode from "../components/MaintenanceMode";
import { Helmet } from "react-helmet";
const Gide = () => {
  return (
    <>
      <div>
        <Helmet>
          <title> Gide 2024 | God&apos;sgift & Doghor </title>

          <meta property="title" content="Gide 2024 | God'sgift & Doghor" />
          <meta property="og:title" content="Gide 2024 | God'sgift & Doghor" />
          <meta
            property="description"
            content="God'sgift Ogodo and I, Doghor Samuel, share a deep bond built on love, friendship, and faith. This page is a reflection of our journey together as we continue to grow and create a life filled with joy and purpose."
          />
          <meta
            property="og:description"
            content="God'sgift Ogodo and I, Doghor Samuel, share a deep bond built on love, friendship, and faith. This page is a reflection of our journey together as we continue to grow and create a life filled with joy and purpose."
          />
          <meta property="image" content="/img/doghs.jpg" />
          <meta property="og:image" content="/img/doghs.jpg" />
        </Helmet>
      </div>
      <MaintenanceMode
        pagetitle="Gide (Godsgift/Doghor(Destiny)), 9th November, 2024"
        expectedCompletion="Monday, 30th September, 2024"
      />
    </>
  );
};

export default Gide;
