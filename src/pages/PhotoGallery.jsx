// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import { styled } from "@mui/material/styles";
import { Helmet } from "react-helmet";
import MaintenanceMode from "../components/MaintenanceMode";

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
//     title: "Bed",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
//     title: "Books",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
//     title: "Sink",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
//     title: "Kitchen",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
//     title: "Blinds",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
//     title: "Chairs",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
//     title: "Laptop",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
//     title: "Doors",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
//     title: "Coffee",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
//     title: "Storage",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
//     title: "Candle",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
//     title: "Coffee table",
//   },
// ];

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
        <MaintenanceMode
          pagetitle="GIDE 2024 Photo Gallery Page"
          expectedCompletion="Friday, 25th October, 2024"
        />
      </div>
      {/* <div className="flex flex-col gap-8 justify-center items-center bg-neutral-300">
        <div className="pt-8">
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
        </div>
        <div className="w-full h-screen flex justify-center items-center">
          <Box className="max-w-full max-h-screen">
            <ImageList
              variant="masonry"
              cols={5}
              gap={4}
              className="overflow-hidden"
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </div>
      </div> */}
    </>
  );
};

export default PhotoGallery;
