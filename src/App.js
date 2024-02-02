import React from "react";
import logo from "../src/assets/images/logo.svg";

const App = () => {
  return (
    <>
      <div className="main">
        <nav>
          <span>
            <img width="52" src={logo} alt="logo" />{" "}
          </span>
          <div>
            <button className="btn">English </button>
            <button className="btn btn-red-sm">Sign In </button>
          </div>
        </nav>
        <div className="box"></div>
        <div className="hero">
          <span className="one">
            Enjoy big movies, hit series and more from ₹ 149.
          </span>
          <span className="two">Join today. Cancel anytime.</span>
          <span className="three">
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
          <div className="hero-buttons">
            <input type="text" placeholder="Email Address" />
            <button className="btn btn-red">Get Started </button>
          </div>
        </div>
        <div className="separation"></div>
      </div>

      <section className="first">
        <div>
          <span className="pop">Enjoy on your TV.</span>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>

        <div className="secImg">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />

          <video
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </section>

      <div className="separation"></div>

      <div className="first second">
        <div className="secImg">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
        </div>
        <div>
          <span className="pop">Download your shows to watch offline</span>
          <p className="p2">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>
      <div className="separation"></div>
      <div className="first second">
        <div>
          <span className="pop">Watch everywhere</span>
          <p className="p2">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <div className="secImg">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />

          <video
            className="vid"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
            width={"400px"}
            height={"auto"}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </>
  );
};

export default App;
