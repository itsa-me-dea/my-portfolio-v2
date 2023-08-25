import { useState } from 'react';
import './Portfolio.css';
import kirbo from '../../images/kirbo-test.gif';

export default function Portfolio() {
  const [focusedImage, setFocusedImage] = useState(null);

  const handleImageFocus = (imageIndex) => {
    setFocusedImage(imageIndex);
  };

  const handleImageBlur = () => {
    setFocusedImage(null);
  };

  const portfolioImages = [
    {
      src: kirbo,
      alt: 'Image 1',
      overlayText: 'Project 1',
    },
    {
      src: kirbo,
      alt: 'Image 2',
      overlayText: 'Project 2',
    },
    {
      src: kirbo,
      alt: 'Image 1',
      overlayText: 'Project 3',
    },
    {
      src: kirbo,
      alt: 'Image 2',
      overlayText: 'Project 4',
    },
    {
      src: kirbo,
      alt: 'Image 1',
      overlayText: 'Project 5',
    },
    {
      src: kirbo,
      alt: 'Image 2',
      overlayText: 'Project 6',
    },
  ];

  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <div className="image-grid">
        {portfolioImages.map((image, index) => (
          <div
            key={index}
            className={`image-wrapper ${focusedImage === index ? 'focused' : ''}`}
            onFocus={() => handleImageFocus(index)}
            onBlur={handleImageBlur}
            tabIndex={0}
          >
            <img src={image.src} alt={image.alt} />
            <div className="overlay">{image.overlayText}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
