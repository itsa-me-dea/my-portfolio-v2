const centerText = {
  textAlign: 'center',
};

export default function Resume() {
    return (
      <div className='resume'>
        <h1 style={centerText}>My Resume</h1>
        <h5>TECHNICAL SKILLS</h5>
        <p><b>Developer:</b> JavaScript ES6+, CSS3, HTML5, NoSQL, GitHub, MongoDB, MySQL, Express, React, Node, Handlebars, jQuery, Bootstrap</p>
        <p><b>Lab:</b> UV-VIS Spectrometer, Microscopy, SEM, HPLC, GC, Viscometer, pH Meter, Osmometer, iCE3 cIEF, DLS, Solo VPE, GMP, Data Review</p>
        <h5>EXPERIENCE </h5>
        <p><b>Scientist I</b> | Eurofins Advantar Lab |  04/2023 - Present</p>
      
        <p><b>Associate Scientist</b> | Eurofins Advantar Lab |  09/2021 - 04/2023</p>
        
        <h5>EDUCATION</h5>
        <p><b>Certificate, Full Stack Web Development</b> – University of California Extension, San Diego | 09/2023</p>
        <p><b>M.S. Biomedical Nanoengineering</b> – University of California, San Diego | 06/2021</p>
        <p><b>B.S. Nanoengineering</b> – University of California, San Diego | 06/2020</p>
        {/* Resume pdf */}
        <div className='pdf'>
          <form action="https://drive.google.com/file/d/1-U3Z8IV5M7s9kRAIynrsIcPWmuTWFlMN/view?usp=sharing">
            <button type="submit">Open Resume</button>
          </form>
        </div>
      </div>
    );
  }
  