import { useEffect, useState } from "react";
import NavBar from "./navBar";
import FormHorario from "./formHorario";
import { HeartIcon } from "../assets/icons";
import HoursCalculator from "./hoursCalculator";
import "../styles/homePage.css";
import "../styles/common.css";
import BentoGrid from "./bentoComponent";

export default function HomePage() {
  useEffect(() => {
    const footer = document.querySelector(".footer-homepage");
    const sections = document.querySelectorAll(".section-view-homepage");
    function checkCollision() {
      const rectFooter = footer.getBoundingClientRect();

      sections.forEach((section) => {
        const rectSection = section.getBoundingClientRect();
        if (rectFooter.bottom > rectSection.top) {
          footer.classList.add("footer-collision");
        } else {
          footer.classList.remove("footer-collision");
        }
      });
    }

    window.addEventListener("scroll", checkCollision);
    window.addEventListener("resize", checkCollision);

    return () => {
      window.removeEventListener("scroll", checkCollision);
      window.removeEventListener("resize", checkCollision);
    };
  }, []);

  return (
    <div className="div-padre-homepage">
      <main className="container-homepage">
        <section className="section-view-homepage">
          <BentoGrid />
        </section>
        <section id="form-calculator" className="section-view-homepage">
          <FormHorario />
        </section>
        <section id="hours-calculator" className="section-view-homepage">
          <HoursCalculator />
        </section>
      </main>
      <footer className="footer-homepage">
        Hecho con{" "}
        <span className="mx-2">
          <HeartIcon />{" "}
        </span>
        por Eric Illanes
      </footer>
    </div>
  );
}
