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
                  2022 - Present
                </div>
                <h3 className="qualification__title">
                  Georgia Institute of Technology
                </h3>
                <span className="qualification__subtitle">
                  Computer Science
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - 2022
                </div>
                <h3 className="qualification__title">
                  UC - San Diego [Transferred]
                </h3>
                <span className="qualification__subtitle">
                  Mathematics and Computer Science
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
                  2017-2021
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
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  Summer 2023
                </div>
                <h3 className="qualification__title">Software Engineer Intern?</h3>
                <span className="qualification__subtitle">
                  Your Company Here
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  May 2021 - September 2021
                </div>
                <h3 className="qualification__title">
                  Technology Sales Associate
                </h3>
                <span className="qualification__subtitle">Staples Inc.</span>
              </div>
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
