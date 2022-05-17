import { FC, useState } from "react";
import "./index.css";
import tracks from "../.././tracks";
import { Audiobook } from "../audioBook";

export const DetailsSection: FC = () => {
  const intialOptionClicked = {
    overview: { active: false, defaultActive: false },
    keyInsights: { active: false, defaultActive: false },
    importantPeople: { active: false, defaultActive: false },
  };
  const [optionClicked, setOptionClicked] = useState({
    ...intialOptionClicked,
    overview: { active: true, defaultActive: false },
  });

  const handleAudioBooks = (option: string) => {
    setOptionClicked({
      ...intialOptionClicked,
      [option]: { active: true, defaultActive: true },
    });
  };

  return (
    <div id="DetailsSectionStyle">
      <div id="TabContents">
        <ul className="nav nav-tabs ir-new-book-table-contents">
          <li className="active">
            <a>Summary</a>
          </li>
          <li>
            <a>Insights</a>
          </li>
          <li>
            <a>Quotes</a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="human_summaries" className="tab-pane">
            <div className="hosted_chapters" id="ir_hosted_chapters">
              <div id="seVBWL5j7E" className="ir-preview-chapter-titles">
                <h2 style={{ textAlign: "left" }}>Overview</h2>
                <p>
                  <i>Astrophysics for People in a Hurry</i> (2017) by Neil
                  deGrasse Tyson is a collection of essays covering a variety of
                  topics in astrophysics.
                </p>
                <p>
                  Physicists theorize that the universe originated with a Big
                  Bang 14 billion years ago, when all matter that exists in the
                  universe began as an extremely dense point and rapidly spread
                  out. Matter and antimatter particles formed in the first
                  millionth of a second from high-energy photons and annihilated
                  upon contact with each other.
                </p>
                <p>
                  The universe cooled substantially moments after the explosion.
                  Subatomic particles began forming heavier particles that
                  eventually became protons and neutrons. Within one second of
                  the Big Bang, the universe had expanded to several light-years
                  in width. Soon after, the particles began to coalesce into
                  atomic structures. About 380,000 years after the Big Bang, the
                  universe filled with the light resulting from the prior
                  interactions. Within a billion years, matter formed galaxies
                  and stars, which seeded heavier elements throughout space when
                  the stars exploded. From there, solar systems with planets
                  formed. Billions of years later, life complex enough to
                  develop intelligence evolved on Earth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="AudioBooksContent">
        <Audiobook tracks={tracks[0]} configs={optionClicked.overview} />
        <Audiobook tracks={tracks[1]} configs={optionClicked.keyInsights} />
        <Audiobook tracks={tracks[2]} configs={optionClicked.importantPeople} />
        <div className="side-bar-container">
          <span className="ir-sidenav-header">Table of Contents</span>
          <ol
            className="ir-sidenav-list-items show-numbering"
            id="ir-sidenav-ordered-list"
            style={{ overflow: "hidden" }}
          >
            <li className="ir-sidenav-content sidenavcontent ir-book-preview-side-item">
              <span style={{ cursor: "pointer" }}>
                <div
                  className="ir-ai-item-text"
                  onClick={() => handleAudioBooks("overview")}
                >
                  Overview
                </div>
              </span>
            </li>
            <li className="ir-sidenav-content sidenavcontent ir-book-preview-side-item">
              <span style={{ cursor: "pointer" }}>
                <div
                  className="ir-ai-item-text"
                  onClick={() => handleAudioBooks("keyInsights")}
                >
                  Key Insights
                </div>
              </span>
            </li>
            <li className="ir-sidenav-content sidenavcontent ir-book-preview-side-item">
              <span style={{ cursor: "pointer" }}>
                <div
                  className="ir-ai-item-text"
                  onClick={() => handleAudioBooks("importantPeople")}
                >
                  Important People
                </div>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
