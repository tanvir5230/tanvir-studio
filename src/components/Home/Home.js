import React from "react";
import "./home.css";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  const social = [
    { link: "https://facebook.com/tanbir.ahmed", icon: "facebook-official" },
    {
      link: "https://www.linkedin.com/in/tanvir-ibn-touhid-tanvir/",
      icon: "linkedin",
    },
    { link: "https://github.com/tanvir5230", icon: "github" },
    { link: "https://twitter.com/ibn_touhid", icon: "twitter" },
  ];
  return (
    <div
      className="bg-white home-bg"
      style={{ maxWidth: "440px", height: "600px" }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "240px", transform: "translateY(340px)" }}
      >
        <div>
          <div className="text-center">
            <h4
              className="text-dark font-weight-bold"
              style={{ fontFamily: "cursive" }}
            >
              Tanvir Ibn Touhid
            </h4>
            <h5>
              <ReactTypingEffect
                text={["front end developer", "MERN stack developer"]}
                style={{ color: "#107896", fontFamily: "fantasy" }}
                speed={200}
                eraseSpeed={100}
                eraseDelay={100}
                typingDelay={200}
                cursor={"|"}
              />
            </h5>
            <div className="my-3">
              {social.map((item) => {
                return (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary mr-3"
                  >
                    <span className={`fa fa-${item.icon} fa-2x`}></span>
                  </a>
                );
              })}
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1CV4vkOsW461HV9o3ksOTLQvI2kx-hrtA/view?usp=sharing"
              className="btn btn-primary font-weight-bold text-capitalize rounded-pill py-3 px-4"
            >
              <span className="fa fa-download mr-2"></span>
              <span className="text-white">download resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
