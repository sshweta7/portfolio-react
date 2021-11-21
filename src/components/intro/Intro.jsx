import "./intro.css";
import shweta from "../../img/shweta.jpg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Welcome!</h2>
          <h2 className="i-intro">I am</h2>
          <h1 className="i-name">Shweta Sroti</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Technology Enthusiast</div>
              <div className="i-title-item">Full Stack Developer</div>
              <div className="i-title-item">Product Owner</div>
              <div className="i-title-item">Beleiver</div>
              <div className="i-title-item">Millennial</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop solutions for customers of all sizes.<br/>
            My specialization is in creating cloud based SaaS (Software as a service) applications.
          </p>
        </div>
        
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={shweta} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
