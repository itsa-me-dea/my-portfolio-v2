import kirbo from '../../images/kirbo-test.gif';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img id="my-pic" src={kirbo} alt="kirbo" width="400"/>
      <p>
      Hi there. Hello! My name is Nhadea Lensky. 
      <br></br><br></br>
      I am a nerd for anything STEM or gaming related. I am new to the code game, but so far my experience has only made me more excited to learn. Thus far, I have dabbled in HTML, CSS, JavaScript and MERN Stack. I have been exposed to Matlab and Python, but it has been <i>years</i> since I've touched either of those. I'm interested in pursuing more in computer science, but let's just see how this coding bootcamp goes. Cheers!
      <br></br><br></br>
      <b>Fun Fact:</b> I have two chinchillas. Zoe was kind enough to take a picture with me, but my boy Ollie was being rude. Good thing he's cute...
      </p>
    </div>
  );
}
