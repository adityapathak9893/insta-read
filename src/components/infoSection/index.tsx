import { FC } from "react";
import "./index.css";

export const InfoSection: FC = () => {
  return (
    <div id="InfoSectionStyle">
      <div id="InfoContainer">
        <img
          id="ImageStyles"
          src="https://webservice.instaread.co/books/images?imageUrl=https://d1cm35kbp068hs.cloudfront.net/ulqsstcvmp/cover.jpg&amp;type=cover"
          alt="Astrophysics for People in a Hurry"
        />
        <div id="ImageDetails">
          <div id="DetailsWrapper">
            <div id="MainTitle">Astrophysics for People in a Hurry Summary</div>
            <div id="SubHeader">Key Insights &amp; Analysis</div>
            <div id="AuthorName">Key Insights &amp; Analysis</div>
            <div id="BookDetails">
              <div className="iconWrapper">
                <span className="headPhoneIcon"></span>
                <span className="iconDetails">18 Min listen</span>
              </div>
              <div className="iconWrapper">
                <span></span>
                <span className="iconDetails">14 Min Read</span>
              </div>
              <div className="iconWrapper">
              <span className="libraryIcon"></span>
              <span className="iconDetails">Add to library</span>
              </div>
              <div className="iconWrapper">
                <span></span>
                <span className="iconDetails">Buy Book</span>
              </div>
            </div>
            <div id="Category">
              <h5 className="bookCategory">Business and Finance</h5>
              <h5 className="bookCategory">Business and Finance</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
