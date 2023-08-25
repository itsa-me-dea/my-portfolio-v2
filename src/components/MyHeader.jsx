import chill from '../images/chill-background.gif';

const headerImage = {
  backgroundImage: `url(${chill})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  textAlign: 'center',
  color: 'white',
  height: '80px',
};

function MyHeader() {
  return (
    <header style={headerImage}>
    <h1>itsa-me-dea</h1>
    <p>My Portfolio</p>
    </header>
  );
}

export default MyHeader;
