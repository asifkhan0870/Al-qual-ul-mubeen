import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: black;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 300%;
  object-fit: cover;
  position: absolute;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0)};
  font-family: "Gulzar", serif;
  background: red;
  // color: black;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: white;
`;

const images = [
  {
    src: "image1.jpg",
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ",
  },
  {
    src: "image2.jpg",
    text: "اِنَّ الَّذِيۡنَ فَرَّقُوۡا دِيۡنَهُمۡ وَكَانُوۡا شِيَـعًا لَّسۡتَ مِنۡهُمۡ فِىۡ شَىۡءٍ‌ ",
  },
  {
    src: "image3.png",
    text: "اِنَّ اللہَ یَرْفَعُ بِھٰذَا الْکِتَابِ اَقْوَامًا وَیَضَعُ بِہٖ آخَرِیْنَ(الحدیث )",
  },
  {
    src: "image4.jpg",
    text: "يٰۤـاَيُّهَا الَّذِيۡنَ اٰمَنُوۡۤا اَطِيۡـعُوا اللّٰهَ وَاَطِيۡـعُوا الرَّسُوۡلَ وَاُولِى الۡاَمۡرِ مِنۡكُمۡ‌ۚ ",
  },
  {
    src: "image5.jpg",
    text: "مَّن يُطِعِ ٱلرَّسُولَ فَقَدْ أَطَاعَ ٱللَّهَ وَمَن تَوَلَّىٰ فَمَآ أَرْسَلْنَـٰكَ عَلَيْهِمْ حَفِيظًا",
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <CarouselImage
          key={index}
          src={image.src}
          alt={image.text}
          active={index === currentIndex}
        />
      ))}
      <TextOverlay>{images[currentIndex].text}</TextOverlay>
    </CarouselContainer>
  );
};

export default ImageCarousel;
