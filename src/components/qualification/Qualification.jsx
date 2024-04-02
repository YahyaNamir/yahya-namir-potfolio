// import React, { useState } from "react";
// import "./qualification.css";
// const Qualification = () => {
//   const [toggleState, setToggleState] = useState(1);

//   const toggleTab = (i) => {
//     setToggleState(i);
//   };
//   return (
//     <section className="qualification section" id="portfolio">
//       <h2 className="section__title">Qualification</h2>
//       <span className="section__subtitle">My personal journey</span>

//       <div className="qualification__container container">
//         <div className="qualification__tabs">
//           <div
//             className={
//               toggleState === 1
//                 ? "qualification__button qualification__active button--flex"
//                 : "qualification__button button--flex"
//             }
//             onClick={() => toggleTab(1)}
//           >
//             <i className="uil uil-graduation-cap qualification__icon"></i>
//             Education
//           </div>

//           <div
//             className={
//               toggleState === 2
//                 ? "qualification__button qualification__active button--flex"
//                 : "qualification__button button--flex"
//             }
//             onClick={() => toggleTab(2)}
//           >
//             <i className="uil uil-briefcase-alt qualification__icon"></i>
//             Experience
//           </div>
//         </div>

//         <div className="qualification__sections">
//           {/* ############################################ */}
//           <div
//             className={
//               toggleState === 1
//                 ? "qualification__content qualification__content-active"
//                 : "qualification__content"
//             }
//           >
//             {/*____________________ */}
//             <div className="qualification__data">
//               <div>
//                 <h3 className="qualification__title">Web Design</h3>
//                 <span className="qualification__subtitle">
//                   Maroc - Institute
//                 </span>
//                 <div className="qualification__calender">
//                   <i className="uil uil-calendar-alt"></i>
//                   2023 - Present
//                 </div>
//               </div>

//               <div>
//                 <span className="qualification__rounder"></span>
//                 <span className="qualification__line"></span>
//               </div>
//             </div>
//             {/*____________________ */}
//             <div className="qualification__data">
//               <div></div>
//               <div>
//                 <span className="qualification__rounder"></span>
//                 <span className="qualification__line"></span>
//               </div>
//               <div>
//                 <h3 className="qualification__title">Art Director</h3>
//                 <span className="qualification__subtitle">
//                   Maroc - Institute
//                 </span>
//                 <div className="qualification__calender">
//                   <i className="uil uil-calendar-alt"></i>
//                   2023 - Present
//                 </div>
//               </div>
//             </div>
//             {/*___________________________________________________________ */}
//             {/*____________________ */}
//             <div className="qualification__data">
//               <div>
//                 <h3 className="qualification__title">Web Development</h3>
//                 <span className="qualification__subtitle">
//                   Maroc - Institute
//                 </span>
//                 <div className="qualification__calender">
//                   <i className="uil uil-calendar-alt"></i>
//                   2023 - Present
//                 </div>
//               </div>

//               <div>
//                 <span className="qualification__rounder"></span>
//                 <span className="qualification__line"></span>
//               </div>
//             </div>
//             {/* ____________________ */}
//             <div className="qualification__data">
//               <div></div>
//               <div>
//                 <span className="qualification__rounder"></span>
//                 <span className="qualification__line"></span>
//               </div>
//               <div>
//                 <h3 className="qualification__title">UX Expert</h3>
//                 <span className="qualification__subtitle">
//                   Maroc - Institute
//                 </span>
//                 <div className="qualification__calender">
//                   <i className="uil uil-calendar-alt"></i>
//                   2023 - Present
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ############################################ */}
//           <div
//             className={
//               toggleState === 2
//                 ? "qualification__content qualification__content-active"
//                 : "qualification__content"
//             }
//           >
//             {/*____________________ */}
//             <div className="qualification__data">
//               <div>
//                 <h3 className="qualification__title">Product Design</h3>
//                 <span className="qualification__subtitle">
//                   Microsoft - OFPPT
//                 </span>
//                 <div className="qualification__calender">
//                   <i className="uil uil-calendar-alt"></i>
//                   2023 - Present
//                 </div>
//               </div>

//               <div>
//                 <span className="qualification__rounder"></span>
//                 <span className="qualification__line"></span>
//               </div>
//             </div>
//             {/*____________________ */}
//             <div className="qualification__data">
//               <div></div>
//               <div>
//                 <span className="qualification__rounder"></span>
//                 <span className="qualification__line"></span>
//               </div>
//               <div>
//                 <h3 className="qualification__title">UX Designer</h3>
//                 <span className="qualification__subtitle">
//                   Apple Inc - OFPPT
//                 </span>
//                 <div className="qualification__calender">
//                   <i className="uil uil-calendar-alt"></i>
//                   2023 - Present
//                 </div>
//               </div>
//             </div>
//             {/*___________________________________________________________ */}
//             {/*____________________ */}
//             <div className="qualification__data">
//               <div>
//                 <h3 className="qualification__title">Web Designer</h3>
//                 <span className="qualification__subtitle">Figma - OFPPT</span>
//                 <div className="qualification__calender">
//                   <i className="uil uil-calendar-alt"></i>
//                   2023 - Present
//                 </div>
//               </div>

//               <div>
//                 <span className="qualification__rounder"></span>
//                 <span className="qualification__line"></span>
//               </div>
//             </div>
//             {/* ____________________ */}
//           </div>

//           {/* ############################################ */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Qualification;

//! ___________________________________________________________
//! ___________________________________________________________

import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (i) => {
    setToggleState(i);
  };

  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {toggleState === 1 && (
            <div className="qualification__content qualification__content-active">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Diploma in Digital Development
                  </h3>
                  <span className="qualification__subtitle">
                    Specialized Institute Of Applied Technology NTIC -
                    Casablanca
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2022 - 2022
                  </div>
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
                  <h3 className="qualification__title">
                    Baccalauréat International en Sciences Physiques
                  </h3>
                  <span className="qualification__subtitle">
                    Lycce Atlass - Casablanca
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2022
                  </div>
                </div>
              </div>
            </div>
          )}

          {toggleState === 2 && (
            <div className="qualification__content qualification__content-active">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Portfolio Web Personnel{" "}
                  </h3>
                  <span className="qualification__subtitle">
                    Designing and developing an interactive and responsive web
                    portfolio to showcase my skills, projects, and professional
                    experiences in an engaging and accessible manner.
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2023 - Present
                  </div>
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
                  <h3 className="qualification__title">
                    Application de Réservation pour Compagnie Aérienne (MERN
                    Stack){" "}
                  </h3>
                  <span className="qualification__subtitle">
                    Development of a web application for flight booking tailored
                    for a fictional airline company. The application will enable
                    users to search for flights, book tickets, and manage their
                    reservations.
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2024 - Present
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
