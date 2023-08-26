import { useState } from 'react';
import './Portfolio.css';
import './style.css';
// IMAGES
import JATE from '../../images/kirbo-test.gif';
import socialDB from '../../images/kirbo-test.gif';
import expressNotes from '../../images/kirbo-test.gif';
import README from '../../images/kirbo-test.gif';
import scheduler from '../../images/kirbo-test.gif';
import quiz from '../../images/kirbo-test.gif';
import password from '../../images/kirbo-test.gif';
import studyGuide from '../../images/kirbo-test.gif';


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
      src: JATE,
      alt: 'just another text editor',
      overlayText: 'J.A.T.E.',
      repo: 'https://github.com/itsa-me-dea/just-another-text-editor',
      link: 'https://lit-ocean-67030-1a0913892dd0.herokuapp.com/',
    },
    {
      src: socialDB,
      alt: 'Image 1',
      overlayText: 'Social Media Database',
      repo: 'https://github.com/itsa-me-dea/NoSQL-SocialMedia-DB',
      link: '',
    },
    {
      src: expressNotes,
      alt: 'Image 1',
      overlayText: 'Note Taker',
      repo: 'https://github.com/itsa-me-dea/Express-Note-Taker',
      link: 'https://agile-spire-31422-c2116f810f76.herokuapp.com/notes',
    },
    {
      src: README,
      alt: 'Image 2',
      overlayText: 'README Generator',
      repo: 'https://github.com/itsa-me-dea/Node-README-Generator',
      link: '',
    },
    {
      src: scheduler,
      alt: 'Image 1',
      overlayText: 'Workday Scheduler',
      repo: 'https://github.com/itsa-me-dea/05-Challenge-WorkDayScheduler',
      link: 'https://itsa-me-dea.github.io/05-Challenge-WorkDayScheduler/',
    },
    {
      src: quiz,
      alt: 'Image 2',
      overlayText: 'Coding Quiz',
      repo: 'https://github.com/itsa-me-dea/04-Challenge-CodeQuiz',
      link: 'https://itsa-me-dea.github.io/04-Challenge-CodeQuiz/',
    },
    {
      src: password,
      alt: 'Image 1',
      overlayText: 'Password Generator',
      repo: 'https://github.com/itsa-me-dea/03-Challenge-PasswordGenerator',
      link: 'https://itsa-me-dea.github.io/03-Challenge-PasswordGenerator/',
    },
    {
      src: studyGuide,
      alt: 'Image 2',
      overlayText: 'Prework Study Guide',
      repo: 'https://github.com/itsa-me-dea/prework-study-guide',
      link: 'https://itsa-me-dea.github.io/prework-study-guide/',
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
            <div className="overlay">
              <div className="overlay-links">
                <div className="link-item">
                  {image.overlayText}
                </div>
                <div className="link-item">
                  <a href={image.repo}>Repo</a>
                </div>
                {image.link && (
                <div className="link-item">
                  <a href={image.link}>Link</a>
                </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
