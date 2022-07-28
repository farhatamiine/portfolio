import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
} from "../utils/animation";

const Hamberger = ({ state }) => {
  let menu = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let categoryBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      //Close our Menu
      gsap.to([reveal1, reveal2], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //Open our Menu
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3, line4);
    }
  }, [state]);

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (reveal2 = el)} className="menu-layer">
        <div className="menu-category-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      legacyBehavior={false}
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior={false}
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line2 = el)}
                      href="/java"
                    >
                      Java
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior={false}
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line3 = el)}
                      href="/react"
                    >
                      React
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior={false}
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line4 = el)}
                      href="/contact"
                    >
                      Contact me
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
                <h3>Our Promise</h3>
                <p>
                  The passage experiencedasurge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets,and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div>
              <div className="categories">
                categories:
                <span>Java</span>
                <span>React</span>
                <span>Redux</span>
                <span>React Query</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamberger;
