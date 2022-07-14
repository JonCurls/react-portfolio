import React, { useState } from "react";

function Project() {
  const [thumbnails] = useState([
    {
      name: "fantasyChat",
      title: "Fantasy Chat",
      deploy: "https://github.com/JonCurls/",
      github: "https://github.com/JonCurls/",
      key: 1,
    },
    {
      name: "codeQuiz",
      title: "Code Quiz",
      deploy: "https://joncurls.github.io/codeQuiz/",
      github: "https://github.com/JonCurls/",
      key: 2,
    },
    {
      name: "runbuddy",
      title: "Run Buddy",
      deploy: "https://joncurls.github.io/run-buddy/",
      github: "https://github.com/JonCurls/",
      key: 3,
    },
    {
      name: "workScheduler",
      title: "Work Scheduler",
      deploy: "https://joncurls.github.io/daily-schedule/",
      github: "https://github.com/JonCurls/",
      key: 4,
    },
    {
      name: "cashTracker",
      title: "cashTracker",
      deploy: "https://limitless-dawn-07480.herokuapp.com/",
      github: "https://github.com/JonCurls/",
      key: 5,
    },
    {
      name: "patio",
      title: "Patio",
      deploy: "https://joncurls.github.io/Patio/",
      github: "https://github.com/JonCurls/",
      key: 6,
    },
    {
      name: "current",
      title: "Current",
      deploy: "https://desolate-crag-78193.herokuapp.com/",
      github: "https://github.com/JonCurls/current",
      key: 6,
    },
  ]);

  return (
    <div className="columns mt-5 is-multiline">
      {thumbnails.map((image) => (
        <div className="column is-4">
          <div className="card pt-4">
            <div className="card-image has-text-centered">
              <div>
                <img
                  src={require(`../../Assets/${image.name}.PNG`)}
                  alt={image.name}
                  key={image.key}
                />
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4 mb-0">{image.title}</p>
                      <a href={image.deploy} className="subtitle is-6">
                        Deploy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
