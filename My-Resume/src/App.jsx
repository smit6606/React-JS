import "./App.css";

function App() {
  const handlePrint = () => window.print();

  return (
    <div className="resume">
      <button className="print-btn" onClick={handlePrint}>
        🖨️ Print
      </button>

      <header>
        <h1>Smit Garala</h1>
        <h2>Full Stack Web Developer</h2>
        <p>
          📞 8320436638 | 📧 smeetgarala6606@gmail.com | 💻{" "}
          <a href="https://github.com/smit6606" target="_blank">
            GitHub
          </a>{" "}
          | 🔗{" "}
          <a
            href="https://linkedin.com/in/smit-garala-28956b344/"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
      </header>

      <div className="columns">
        <div className="column">
          <section>
            <h3>Profile</h3>
            <p>
              A passionate and detail-oriented Full Stack Developer with a deep
              interest in backend technologies, REST APIs, and database
              management. Known for building secure and scalable systems using
              Node.js, Express, and MongoDB. I thrive in collaborative
              environments and enjoy taking ownership of features from concept
              to deployment. Constantly learning and exploring new technologies
              to improve code quality, user experience, and performance.
            </p>
          </section>

          <section>
            <h3>Education</h3>
            <p>
              <strong>B.E.</strong> – C.K. Pithawala College of Engineering,
              Surat
              <br />
              <em>2021 – 2025</em>
            </p>
            <p>
              <strong>H.S.C.</strong> – C.S. Vidya Bharti, Surat
              <br />
              <em>Completed: 2021</em>
            </p>
          </section>

          <section>
            <h3>Technical Skills</h3>
            <ul>
              <li>
                <strong>Frontend:</strong> HTML5, CSS3, JavaScript, Bootstrap
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express.js, JWT, REST APIs
              </li>
              <li>
                <strong>Database:</strong> MongoDB (Mongoose)
              </li>
              <li>
                <strong>Tools:</strong> Git, GitHub, VS Code, Postman
              </li>
            </ul>
          </section>
        </div>

        <div className="column">
          <section>
            <h3>Internship – ScriptJet (Jan - Apr 2025)</h3>
            <ul>
              <li>Built secure login systems using JWT</li>
              <li>Created RESTful APIs with Node.js + MongoDB</li>
              <li>Designed role-based dashboards using EJS</li>
              <li>Worked under the guidance of Mrs. Ekta Bhanderi</li>
            </ul>
          </section>

          <section>
            <h3>Projects</h3>
            <div className="project">
              <h4>FuelMech – Fuel & Mechanic Service App</h4>
              <p>
                Complete service management system with OTP login, Stripe
                payment, and role-based dashboards.
              </p>
              <a href="https://github.com/smit6606/FueMech" target="_blank">
                GitHub ↗
              </a>
            </div>
            <div className="project">
              <h4>Admin Panel – E-Commerce Management</h4>
              <p>
                Login-protected panel with CRUD for categories, subcategories,
                and products using Passport.js.
              </p>
              <a
                href="https://github.com/smit6606/BeyondNodeJS"
                target="_blank"
              >
                GitHub ↗
              </a>
            </div>
          </section>

          <section>
            <h3>Interests</h3>
            <p>
              🌐 Exploring new web tech
              <br />
              📦 Backend architecture & performance
              <br />⚽ Playing cricket with friends
              <br />
              🧠 Personal growth & productivity
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
