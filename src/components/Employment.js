import ArrowButton from "./ArrowButton";
import { useEffect } from "react";

export default function Employment({ onMenuSelect }) {
  useEffect(() => {
    const handleScroll = () => {
      const downButton = document.querySelector(".down-button");
      // Use document.documentElement.scrollTop for scroll position
      const shouldBeVisible = document.documentElement.scrollTop < 100; // Adjust threshold as needed
      downButton.style.opacity = shouldBeVisible ? "1" : "0";
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="employment" id="employment-section">
      <div className="back-button">
        <ArrowButton
          direction="left"
          onClick={() => onMenuSelect("MainPage")}
        />
      </div>

      <header className="header">
        <h1>Employment</h1>

        <div className="down-button">
          <ArrowButton
            direction="down"
            onClick={() =>
              document
                .getElementById("resume-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </header>

      <div className="employment-content">
        <section className="experience">
          <div className="resume" id="resume-section">
            <h2 className="job-title">
              Developer at OneFeather Mobile Technologies Ltd.
            </h2>
            <p className="job-year">Aug 22 - Present :: Victoria BC</p>
            <div className="job-description">
              <p>
                Supported the development and refinement of front and back-end
                web development using Ruby on Rails, JavaScript, Elixir, Phoenix
                LiveView, React, and HTML/CSS to build applications to support
                Indigenous sovereignty in the digital era, such as status card
                renewal support and digital voting platforms for Nation
                elections.
              </p>
              <p>
                Participated in ongoing database management projects, using
                Postgres, API integration with GraphQL to improve existing data
                model design and implement new features.
              </p>
              <p>
                Implemented repeatable automated processes for building and
                testing applications to correct errors and defects in existing
                applications.
              </p>
              <p>
                Collaborated with other teams in and across the organizational
                agile environment to accomplish goals and ensure sprint
                requirements were met throughout the lifecycle of the project.
              </p>
              <p>
                Briefed technical concepts to a non-technical audience as needed
                to communicate changes and ensure understanding of new features.
              </p>
              <p>
                Researched appropriate development tools, and collaborated with
                team members on alternatives and solutions, product evaluation,
                risk assessment of existing and future applications.
              </p>
            </div>

            <h2 class="job-title">
              Contract Support Agent at OneFeather Mobile Technologies Ltd.
            </h2>
            <p class="job-year">Sept 21 - May 22 :: Victoria BC</p>
            <div class="job-description">
              <p>
                Evaluated status card applications using step review process
                prior to their submission to Indigenous Services Canada,
                communicating directly with clients as needed to ensure
                application compliance with federal requirements.
              </p>
              <p>
                Maintained OneFeather`s internal ticketing system of status card
                applications, ensuring minimal processing times and reduced
                number of rejected applications.
              </p>
            </div>

            <h2 class="job-title">
              Merchant Success Specialist at Pixel Union
            </h2>
            <p class="job-year">May 17 - Dec 19 :: Victoria BC</p>
            <div class="job-description">
              <p>
                Managed the daily queue of support requests for Pixel Union`s
                Shopify theme owners.
              </p>
              <p>
                Provided ongoing HTML, CSS, Liquid, and Javascript support to
                actively help problem solve and complete clients' desired goals
                in a fast, trustworthy, and reliable manner.
              </p>
              <p>
                Created and implemented new processes for responding to support
                requests, resulting in increased efficiency and enhanced
                customer satisfaction.
              </p>
              <p>
                Trained and mentored new team members in their customer service
                roles to improve speed, professionalism, and success ratings.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="up-button">
        <ArrowButton
          direction="up"
          onClick={() =>
            document
              .getElementById("employment-section")
              .scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
    </div>
  );
}
