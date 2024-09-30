export const Programs=()=>{
  return(
    <>
    <section id="Programs">
    <h1 className="headingcenter"><b>About Me</b></h1>
{/* Educational Background and Professional Journey */}
        <div className="container about-details">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="about-subtitle">Educational Background</h2>
              <p className="about-text">
              "My journey in web development and UI/UX design began during college. In my first year, I started a Udemy course that included a project focused on building a hotel website, which sparked my interest in web development. I then began learning Figma through YouTube videos, which enabled me to design several projects, honing my skills in UI/UX design. One of my key projects was the<b> Oasis Preschool website</b>, where I managed both the front-end and back-end using <b>HTML</b>,<b>CSS</b>,<b>Javascript</b> ,<b>React</b>,<b> Spring Boot</b>, and <b>MySQL</b>."
              </p>

              <h2 className="about-subtitle">Professional Journey</h2>
              <p className="about-text">
                I’ve worked on a variety of projects across <strong>UI/UX design</strong> and <strong>full-stack development</strong>. My toolkit includes <strong>Java, Spring Boot, React, Figma</strong>, and more. Currently, I'm enhancing my skills through the <strong>Google UX Design course</strong> on Coursera.
              </p>
            </div>
          </div>
        </div>

        {/* Design Philosophy */}
        <div className="container philosophy-container">
          <h2 className="about-subtitle">Design Philosophy</h2>
          <p className="about-text">
            I believe in simplicity and functionality. My goal is to create designs that resonate with users and solve real-world problems. I aim to balance <em>aesthetic appeal</em> and <em>usability</em>, always focusing on the user’s needs.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="container timeline-container">
          <h2 className="about-subtitle">Journey Timeline</h2>
          <ul className="timeline">
            <li>
              <div className="timeline-content">
                <h3>2022 - Started Exploring UI/UX Design</h3>
                <p>Began learning Figma and other design tools.</p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h3>2024 - Completed Oasis Preschool Website</h3>
                <p>Developed the front-end and back-end using React and Spring Boot.</p>
              </div>
            </li>
        
            <li>
              <div className="timeline-content">
                <h3>2024 - Continuing My Learning Journey</h3>
                <p>Enhancing my skills through the Google UX Design course and building new projects.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Skills Section with Icons */}
        <div className="container skills-container">
          <h2 className="about-subtitle">Skills</h2>

          <div className="row">
            <div className="col skill-icon">
              <img src="./images/Java.png" alt="Java" />
              <p>Java</p>
            </div>
            <div className="col skill-icon">
              <img src="./images/React.png" alt="React" />
              <p>React</p>
            </div>
            <div className="col skill-icon">
              <img src="./images/Spring Boot.png" alt="Spring Boot" />
              <p>Spring Boot</p>
            </div>
            <div className="col skill-icon">
              <img src="./images/Figma.png" alt="Figma" />
              <p>Figma</p>
            </div>

            <div className="row">
            <div className="col skill-icon">
              <img src="./images/C.png" alt="C" />
              <p>C</p>
            </div>
            <div className="col skill-icon">
              <img src="./images/HTML.png" alt="HTML" />
              <p>HTML</p>
            </div>
            <div className="col skill-icon">
              <img src="./images/CSS.png" alt="CSS" />
              <p>CSS</p>
            </div>
            <div className="col skill-icon">
              <img src="./images/Javascript.png" alt="Javascript" />
              <p>Javascript</p>
            </div>
            </div>
            {/* Add more skills */}
          </div>
        </div>

        {/* Interests Section */}
        <div className="container interests-container">
          <h2 className="about-subtitle">My Interests</h2>
          <p className="about-text">
            I continue to nurture my love for <strong>drawing and painting</strong>, allowing my creativity to flow into my design work, where I aim to create visually compelling digital experiences.
          </p>
        </div>
</section>
</>
  );
}