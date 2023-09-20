import { useState } from 'react';
// IMAGES
import JATE from '../../images/JATE.png';
import endorfins from '../../images/endorfins.png';
import socialDB from '../../images/socialmediaDB.png';
import expressNotes from '../../images/noteTaker.png';
import README from '../../images/READMEgen.png';
import scheduler from '../../images/scheduler.png';
import quiz from '../../images/codingQuiz.png';
import password from '../../images/passwordGen.png';
import studyGuide from '../../images/studyGuide.png';
import thymeForLunch from '../../images/thymeForLunch.gif';

export default function Portfolio() {
  const [focusedImage, setFocusedImage] = useState(null);

  const handleImageFocus = (imageIndex) => {
    setFocusedImage(imageIndex);
  };

  const handleImageBlur = () => {
    setFocusedImage(null);
  };

  // List of images and associate links
  const portfolioImages = [
    {
      src: thymeForLunch,
      alt: 'Thyme for Lunch Meal Planner',
      overlayText: 'Thyme for Lunch',
      repo: 'https://github.com/Esztergb/Thyme-for-Lunch',
      link: 'https://thyme-for-lunch-ca35ba4e7fee.herokuapp.com/',
    },
    {
      src: JATE,
      alt: 'just another text editor',
      overlayText: 'J.A.T.E.',
      repo: 'https://github.com/itsa-me-dea/just-another-text-editor',
      link: 'https://lit-ocean-67030-1a0913892dd0.herokuapp.com/',
    },
    {
      src: endorfins,
      alt: 'Endorfins forum platform',
      overlayText: 'Endorfins Forum',
      repo: 'https://github.com/itsa-me-dea/Endorfins',
      link: 'https://endorfins-test-45d30ece2578.herokuapp.com/',
    },
    {
      src: socialDB,
      alt: 'Social Media Database',
      overlayText: 'Social Media Database',
      repo: 'https://github.com/itsa-me-dea/NoSQL-SocialMedia-DB',
      link: '',
    },
    {
      src: expressNotes,
      alt: 'Note Taker',
      overlayText: 'Note Taker',
      repo: 'https://github.com/itsa-me-dea/Express-Note-Taker',
      link: 'https://agile-spire-31422-c2116f810f76.herokuapp.com/notes',
    },
    {
      src: README,
      alt: 'README Generator',
      overlayText: 'README Generator',
      repo: 'https://github.com/itsa-me-dea/Node-README-Generator',
      link: '',
    },
    {
      src: scheduler,
      alt: 'Workday Scheduler',
      overlayText: 'Workday Scheduler',
      repo: 'https://github.com/itsa-me-dea/05-Challenge-WorkDayScheduler',
      link: 'https://itsa-me-dea.github.io/05-Challenge-WorkDayScheduler/',
    },
    {
      src: quiz,
      alt: 'Coding Quiz',
      overlayText: 'Coding Quiz',
      repo: 'https://github.com/itsa-me-dea/04-Challenge-CodeQuiz',
      link: 'https://itsa-me-dea.github.io/04-Challenge-CodeQuiz/',
    },
    {
      src: password,
      alt: 'Password Generator',
      overlayText: 'Password Generator',
      repo: 'https://github.com/itsa-me-dea/03-Challenge-PasswordGenerator',
      link: 'https://itsa-me-dea.github.io/03-Challenge-PasswordGenerator/',
    },
    {
      src: studyGuide,
      alt: 'Prework Study Guide',
      overlayText: 'Prework Study Guide',
      repo: 'https://github.com/itsa-me-dea/prework-study-guide',
      link: 'https://itsa-me-dea.github.io/prework-study-guide/',
    },
  ];

  // Page HTML
  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <div className="image-grid">
        {/* Map info from portfolioImages */}
        {portfolioImages.map((image, index) => (
          <div
            key={index}
            className={`image-wrapper ${focusedImage === index ? 'focused' : ''}`}
            onFocus={() => handleImageFocus(index)}
            onBlur={handleImageBlur}
            tabIndex={0}
          >
            {/* Images */}
            <img src={image.src} alt={image.alt} />

            {/* Overlay (info / links) */}
            <div className="overlay">
              <div className="overlay-links">
                <div className="link-item">
                  {image.overlayText}
                </div>
                <div className="link-item">
                  <a className="actual-link" href={image.repo}>Repo</a>
                </div>
                {image.link && (
                <div className="link-item">
                  <a className="actual-link" href={image.link}>Link</a>
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
