import { useEffect, useState } from "react";
import "../styles/AboutPage.css";
import poker from "../assets/poker.png";
import basketball from "../assets/basketball.png";
import family from "../assets/family.png";
import gf from "../assets/gf.png";
import metmuseum from "../assets/metmuseum.png";
import winstar from "../assets/winstar.png";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import { MdOutlineCircle, MdCircle } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";

function ImageBox() {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const imageArr: string[] = [
    metmuseum,
    family,
    gf,
    basketball,
    poker,
    winstar,
  ];

  const imageText: string[] = [
    "Outside the Met Museum in NYC",
    "With my family at Acadia National Park",
    "With my girlfriend after kayaking adventure",
    "Me playing UT Intramural Basketball",
    "First time playing poker in a casino (made $200!)",
    "Winstar Casino trip with my friends",
  ];

  useEffect(() => {
    setImageIndex(0);
    const preloadedImages: HTMLImageElement[] = new Array(imageArr.length);
    let loadedCount = 0;
  
    // Preload each image and ensure the correct order
    imageArr.forEach((imgSrc, index) => {
      const img = new Image();
      img.src = imgSrc;
  
      img.onload = () => {
        preloadedImages[index] = img; // Assign to the correct index
        loadedCount++;
  
        // Check if all images are loaded
        if (loadedCount === imageArr.length) {
          setImages(preloadedImages);
          setLoading(false);
        }
      };
    });
  }, []);  

  function updateIndex(add: boolean) {
    if (add) {
      setImageIndex((imageIndex + 1) % imageArr.length);
    } else {
      let index = imageIndex;
      index--;
      if (index < 0) {
        index = imageArr.length - 1;
      }
      setImageIndex(index);
    }
  }

  return (
    <div className="image-box-outer">
      {loading ? (
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#5bc0de"
          ariaLabel="tail-spin-loading"
          radius="1"
        />
      ) : (
        <>
          <img src={images[imageIndex].src} />
          <div className="image-box-details">
            <CiCircleChevLeft
              onClick={() => {
                updateIndex(false);
              }}
              className="arrow-icon"
            />
            <div className="image-box-text">
              <div>{imageText[imageIndex]}</div>
              <div style={{ fontSize: "10px", marginTop: "8px" }}>
                {imageArr.map((img, index) =>
                  index == imageIndex ? <MdCircle /> : <MdOutlineCircle />
                )}
              </div>
            </div>
            <CiCircleChevRight
              onClick={() => {
                updateIndex(true);
              }}
              className="arrow-icon"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default ImageBox;
