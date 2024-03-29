import React, { useState } from "react";
import "./EduandExp.css";
const EduandExp = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title"> Education and Experience</h2>
      <span className="section__subtitle"> My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap"></i> Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt"></i> Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - Present
                </div>
                <h3 className="qualification__title">
                  University of Washington Seattle
                </h3>
                <span className="qualification__subtitle">
                  Computer Science - Paul G. Allen School of Computer Science & Engineering
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - Present
                </div>
                <h3 className="qualification__title">
                  University of Washington Seattle
                </h3>
                <span className="qualification__subtitle">
                  Informatics - Information School
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2023
                </div>
                <h3 className="qualification__title">
                  University of Washington Bothell [Transferred]
                </h3>
                <span className="qualification__subtitle">
                  Computer Science & Software Engineering
                </span>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2018-2022
                </div>
                <h3 className="qualification__title">
                  Liberty High Sr. School
                </h3>
                <span className="qualification__subtitle">Diploma</span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>
              <div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EduandExp;
