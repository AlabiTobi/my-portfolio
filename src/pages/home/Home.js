import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from 'react-simple-animate';
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("./contact");
  };
  return (
    <section className="home" id="home">
      <div className="home_text_wrapper">
        <h1>
          Hello , I'm Tobi
          <br />
          Frontend Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateY(550px',
        }}
        end={{
          transform: 'translateX(0px)',
        }}

        >
        <div className="home_contact_me">
          <button onClick={handleNavigateToContactMePage}>Hire me</button>
        </div>
      </Animate>
      
    </section>
  );
};

export default Home;
