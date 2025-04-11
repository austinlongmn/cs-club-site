"use client";

import Image from "next/image";

export default function Page() {
  return (
    <div style={{ height: "auto" }}>
      <h1 style={{ fontSize: "30px" }}>Mason Colacicco</h1>
      <div className="project-flex">
        <div className="hunks">
          <h2 style={{ fontSize: "25px" }}>College Hunks App</h2>
          <h3 style={{ fontSize: "20px" }}>Problem</h3>
          <p>
            I have worked at College Hunks Hauling Junk and Moving since the
            summer of 2024. This project started that fall of 2024 for Systems
            Analysis and Design class. I was working with a teammate, Andrew, to
            come up with a solution to a problem in the company. The problem
            presented by College Hunks was that their data input in Excel took
            around 14 hours every 2 weeks. They use excel for everything to with
            data. In the same excel spreadsheet there are around 9 tabs that
            store data from from years and years ago to tabs that require a
            complex input of data from two sources to return an output for
            spreadsheet data storage. They wanted to stay with Excel, so my
            teammate and I thought of a solution to remove one of the uses of
            Excel in the complex data input for calculation.
          </p>
          <br></br>
          <Image
            src="/images/mason/Hunk_rocks.jpg"
            alt="College Hunks"
            className="rounded-lg shadow-md transition-transform duration-300 hover:scale-102"
            width={700}
            height={400}
          />
          <p className="pt-1 text-xs">
            This is an image of Nate from College Hunks. He is a Move Captain
            that Mason has worked with occasionally.
          </p>
          <br></br>
          <h3>Solution</h3>
          <p>The solution</p>
        </div>
        <div className="other">
          <h2 style={{ fontSize: "25px" }}>Something Else</h2>
          <p>
            This is a test paragraph for the next project that I will be working
            on. I am not too sure what it will be because most of my projects
            have revolved around College Hunks and the rest of the stuff has
            just been too small to talk about. I suppose I could talk about how
            I have been the TA for Dr. Smith for the past year, which has been
            not only a blessing in my life but also been a great learning
            experience to get back into topics that I may have forgotten a
            little bit about. It has helped me deepen my understanding of
            fundemental topics and express my understanding of the topics
            through supporting other's understanding as well.
          </p>
        </div>
      </div>
      <style jsx>
        {" "}
        {`
          .project-flex {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 1150px;
          }
          .hunks,
          .other {
            max-width: 47%;
            min-width: 400px;
          }
          .image-wrapper {
            overflow: hidden;
            padding: 10px 10px;
          }
          @media (max-width: 768px) {
            .project-flex {
              flex: 1;
              min-width: 400px;
              max-width: 768px;
            }
            .hunks,
            .other {
              flex: 1;
              max-width: 100%;
              padding-left: 25px;
              padding-right: 25px;
            }
          }
        `}
      </style>
    </div>
  );
}
