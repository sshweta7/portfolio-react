import "./about.css";
import Shweta from "../../img/shweta.webp";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Shweta}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
            Welcome! You just stumbled upon the portfolio page of an <br/> <b> all-rounder </b> code crafter!!
        </p>
        <p className="a-desc">
            I have over 6 years of experience in software development.<br/>
            I enjoy working with clients across the globe.
        </p>
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className="a-award-title">Technical Expertise:</h4>
            <p className="a-award-desc">
                Agile Full-Stack Software Development, Product Management, User Experience, Machine Learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
