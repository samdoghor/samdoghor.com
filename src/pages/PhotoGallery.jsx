import { Helmet } from "react-helmet";

const PhotoGallery = () => {
  return (
    <>
      <div
        className="container mx-auto px-4 md:px-32 bg-primary-bgcolor min-h-screen max-w-full"
        style={{ zIndex: 2 }} // Set z-index to 1 for the main container
      >
        <div>
          <Helmet>
            <title> Gide 2024 | Gallery </title>

            <meta property="title" content="Gide 2024 | Gallery" />
            <meta property="og:title" content="Gide 2024 | Gallery" />
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
      </div>
      <div className="flex flex-col gap-8 justify-center items-center bg-neutral-300"></div>
    </>
  );
};

export default PhotoGallery;
