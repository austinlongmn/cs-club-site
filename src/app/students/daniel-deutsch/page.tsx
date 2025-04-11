import Image from "next/image";
import "./page-styles.css"

export default function Page() {
  return (
    <>
      <header>
        <h1 className="main-title">
          <u>Welcome to Daniel's World!</u>
        </h1>
      </header>

      <section aria-labelledby="gallery-title">
        <h2 id="gallery-title" className="section-title">
          A Glimpse Into My Life
        </h2>
        <div className="image-grid">
          <figure>
            <Image
              src="/images/daniel/cs-club-website-activities-basketball.png"
              alt="Daniel playing basketball"
              width="300"
              height="200"
            />
            <figcaption>
              <strong>Basketball Enthusiast:</strong> Shooting hoops keeps me
              active.
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/images/daniel/cs-club-website-activities-coding.png"
              alt="Daniel coding on his laptop"
              width="300"
              height="200"
            />
            <figcaption>
              <strong>Coding Dilente:</strong> Developing apps is my passion.
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/images/daniel/cs-club-website-activities-chess.png"
              alt="Daniel playing chess"
              width="300"
              height="200"
            />
            <figcaption>
              <strong>Chess Aficionado:</strong> Strategy games sharpen my mind.
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="about-title">
        <h2 id="about-title" className="section-title">
          About Me
        </h2>
        <article className="about-me">
          <p>
            I'm <mark>Daniel</mark>, a college student with a zest for life.
          </p>
          <p>
            <strong>My hobbies include:</strong>
          </p>
          <ul>
            <li>
              Learning survival skills like shelter-building, navigation, and
              first aid.
            </li>
            <li>
              Scuba diving to underwater worlds teeming with marine life and
              coral reefs.
            </li>
            <li>
              Using photography to capture the beauty of nature and the stars.
            </li>
          </ul>
          <p className="left-border">
            As a member of UNW's Computer Science Club, I am proud to actively
            contribute to designing our club's website.
          </p>
          <details>
            <summary>Why Computer Science?</summary>
            <p>
              <mark>Computer Science</mark> fascinates me because it is the
              future. From automating mundane tasks to creating immersive
              experiences, the possibilities are endless.
            </p>
          </details>
          <p>
            Beyond academics, I enjoy exploring new technologies and staying
            updated with industry trends. Recently, I've been diving into{" "}
            <strong>machine learning</strong> and <strong>data science</strong>,
            areas that challenge me to think critically and analytically.
          </p>
          <aside>
            <p>
              <i>"The best way to predict the future is to create it."</i> This
              quote resonates deeply with me, as I strive to innovate and leave
              a positive impact through my work.
            </p>
          </aside>
        </article>
      </section>

      <section aria-labelledby="projects-title">
        <h2 id="projects-title" className="section-title">
          My Computer Science Projects
        </h2>
        <table className="project-table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
              <th>Tools Used</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ultimate Computer</td>
              <td>All-in-one app that responds to user commands.</td>
              <td>Java</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Student Database</td>
              <td>System that tracks students on a college campus.</td>
              <td>Python, SQLite</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Club Website</td>
              <td>Revamped the CS Club's official site.</td>
              <td>HTML, CSS, JavaScript</td>
              <td>Ongoing</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section aria-labelledby="contact-title">
        <h2 id="contact-title" className="section-title">
          Get In Touch
        </h2>
        <form action="/submit" method="post" className="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. James Jones"
            required
            aria-label="Enter your name"
          ></input>

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Type your message..."
            required
            aria-label="Enter your message"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2025 Daniel. All rights reserved.</p>
      </footer>
    </>
  );
}
