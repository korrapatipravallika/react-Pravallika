import { useEffect, useState } from "react";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

export const Banner = () => {
  const fullText = "Web Developer";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        setIndex((prev) => prev + 1);
      }
    }, 120);

    return () => clearTimeout(timeout);
  }, [index, fullText]);

  return (
    <section className="banner" id="home">
      <div className="container row">
        <div className="col-6">
          <span className="tagline">Welcome to my Portfolio</span>
          <h1>
            Hi! I'm Pravallika Korrapati <br />
            <span className="typing">{text}</span>
          </h1>
          <p>
            Experienced Frontend Developer skilled in  html,css,javascript & React .
          </p>
          <button className="banner-btn">
            Let’s Connect <ArrowRightCircle size={25} />
          </button>
        </div>

        <div className="col-6">
          <img src={headerImg} alt="Header" />
        </div>
      </div>
    </section>
  );
};