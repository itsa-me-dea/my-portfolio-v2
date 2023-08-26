// Images
import chill from '../images/chill-background.gif';

// CSS Styling
const headerImage = {
  backgroundImage: `url(${chill})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  textAlign: 'center',
  color: 'white',
  height: '120px',
};

// Header HTML
function MyHeader() {
  return (
    <header style={headerImage}>
    <h1>itsa-me-dea</h1>
    <p>My Portfolio</p>
    </header>
  );
}

export default MyHeader;
