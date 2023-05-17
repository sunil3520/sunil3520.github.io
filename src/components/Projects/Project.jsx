import React from "react";
import "./Projects.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,
  SiMaterialui,
  SiChakraui,
  SiExpress,
  SiRedux,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import Flipkart from "../assets/Flipkart.gif";
import bewkoof from "../assets/bewkoof.gif";
import dotandkey from "../assets/dot&key.gif";
import dmasgame from "../assets/dmasgame.gif";
import cronometer from "../assets/cronometer.gif";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={Flipkart} alt="Flipcart clone" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>FLIPKART - Clone</h2>
              <p>
                Flipkart is an ecommerce platform from that sells dresses shoes
                and many more things.
              </p>
              <div>
                <FaReact />
                <SiExpress />
                <DiMongodb />
                <SiMaterialui />
                <SiChakraui />
                <SiRedux />
                <FaNodeJs />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://mishraplus.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/sunil3520/FlipkartClone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* One */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={bewkoof} alt="Bewkoof" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Bewkoof - Clone</h2>
              <p>
                Bewkoof is an online shopping website that offers trendy
                clothing, accessories, and lifestyle products for men and women.
              </p>
              <div>
                <FaReact />
                <SiExpress />
                <DiMongodb />
                <SiMaterialui />
                <SiChakraui />
                <SiRedux />
                <FaNodeJs />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://delicate-mooncake-6ba932.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/atheist31/legit-substance-7075"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* three */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={cronometer} alt="Razer clone" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Cronometer-Clone</h2>
              <p>
                FIt Fuel is a clone of the Cronometer web application
                 that allows users to track their nutrition and exercise.
                Users can log their meals and workouts, and Cronometer will
                calculate the macronutrient and micronutrient breakdown of their
                diet.
              </p>
              <div>
                <FaReact />
                <SiExpress />
                <DiMongodb />
                <SiMaterialui />
                <SiChakraui />
                <SiRedux />
                <FaNodeJs />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://fitfuel.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/eminence007/grouchy-dinner-9447"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        {/*  */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={dmasgame} alt="FlipkartPlus" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Word Game</h2>
              <p>
                About It is a Mathematical Operation Game, the name Dmas is
                derived from BODMAS, It is designed to help students learn and
                practice mathematics while playing
              </p>
              <div>
                <FaReact />
                <SiExpress />
                <DiMongodb />
                <SiMaterialui />
                <SiChakraui />
                <SiRedux />
                <FaNodeJs />
                <SiTypescript />
              </div>
              <div>
                <a
                  href="https://dmas-game.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shreshthkr/mas_game"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Two */}

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={dotandkey} alt="Dot & Key" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Dot & Key Clone</h2>
              <p>
                Dot & Key is a skincare brand that focuses on natural and
                effective formulations, offering a range of products for various
                skin concerns. Their website showcases their products,
                highlighting their commitment to quality and promoting a
                holistic approach to skincare.
              </p>
              <div>
                <DiCss3 />
                <IoLogoJavascript />
                <SiHtml5 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://chipper-selkie-3773ab.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Aman3512/dotandkey_clone_project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
