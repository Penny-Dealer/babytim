import React from "react";
import css from "styled-jsx/css";
import Link from "next/link";
import { FaGithubSquare, FaHandHoldingUsd, FaFish } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <style jsx>{styles}</style>
      <nav>
        <div className="logo">
          <a href="https://th-thumbnailer.cdn-si-edu.com/NaGo-Ynjy5Op3n9PYq7iySRQAO8=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg">

          </a>
        </div>
        <div className="links">
          <Link href="/">
            <a>Projects</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className="social">
          <a href="https://github.com/">
            <FaGithubSquare />
          </a>

          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <FaHandHoldingUsd />
          </a>

          <a href="https://www.youtube.com/watch?v=rTqrpOLbhHQ&ab_channel=XBoTMeN">
            <FaFish />
          </a>

          <a href="https://c.tenor.com/tHLGe49Kf1EAAAAM/oh-blow-fish.gif">
            <FaFish />
          </a>

        </div>
      </nav>
    </>
  );
}

const styles = css`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 20px;
  }
  .logo {
    
  }
  .links {
    display: flex;
    /* margin-right: auto; */
  }
  a {
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    margin-right: 10px;
    transition: all 0.2s;
    vertical-align: middle;
    color: rgba(83, 43, 194, 0.8);
    /* color: rgba(255, 255, 255, 0); */
  }
  a:hover {
    color: rgba(83, 43, 194, 1);
    transform: scale(1.04);
  }
  .social{
    margin-left: auto;
  }
  .social a {
    font-size: 28px;
  }
`;

export default Navbar;
