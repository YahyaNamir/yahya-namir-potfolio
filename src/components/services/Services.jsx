// import React, { useState } from "react";
// import "./services.css";

// const Services = () => {
//   const [toggleState, setToggleState] = useState(0);

//   const toggleTab = (i) => {
//     setToggleState(i);
//   };
//   return (
//     <section className="services section" id="services">
//       <h2 className="section__title">Services</h2>
//       <span className="section__subtitle">What i offer</span>

//       <div className="services__container container grid">
//         <div className="services__content">
//           <div>
//             <i className=" uil uil-web-grid services__icon"></i>
//             <h3 className="services__title">
//               Product <br /> Designer
//             </h3>
//           </div>

//           <span className="services__button" onClick={() => toggleTab(1)}>
//             View More<i className=" uil-arrow-right services__icon-icon"></i>
//           </span>

//           <div
//             className={
//               toggleState === 1
//                 ? "services__modal active-modal"
//                 : "services__modal"
//             }
//           >
//             <div className="services__modal-content">
//               <i
//                 onClick={() => toggleTab(0)}
//                 className=" uil-times services__modal-close"
//               ></i>
//               <h3 className="services__modal-title">Product Designer</h3>
//               <p className="services__modal-description">
//                 Service with more than 1 years of experience. Providing quality
//                 work to clients and companies .
//               </p>

//               <ul className="services__modal-services grid">
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I develop the user interface
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I design responsive websites
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I optimize website performance
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I offer website maintenance and support
//                   </p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="services__content">
//           <div>
//             <i className=" uil uil-arrow services__icon"></i>
//             <h3 className="services__title">
//               {" "}
//               UI/UX <br /> Designer{" "}
//             </h3>
//           </div>

//           <span className="services__button" onClick={() => toggleTab(2)}>
//             View More<i className=" uil-arrow-right services__icon-icon"></i>
//           </span>

//           <div
//             className={
//               toggleState === 2
//                 ? "services__modal active-modal"
//                 : "services__modal"
//             }
//           >
//             <div className="services__modal-content">
//               <i
//                 className=" uil-times services__modal-close"
//                 onClick={() => toggleTab(0)}
//               ></i>
//               <h3 className="services__modal-title">UI/UX Designer</h3>
//               <p className="services__modal-description">
//                 Service with more than 1 years of experience. Providing quality
//                 work to clients and companies .
//               </p>

//               <ul className="services__modal-services grid">
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I develop the user interface
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I design responsive websites
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I optimize website performance
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I offer website maintenance and support
//                   </p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="services__content">
//           <div>
//             <i className=" uil uil-edit services__icon"></i>
//             <h3 className="services__title">
//               Visual <br /> Designer
//             </h3>
//           </div>

//           <span className="services__button" onClick={() => toggleTab(3)}>
//             View More<i className=" uil-arrow-right services__icon-icon"></i>
//           </span>

//           <div
//             className={
//               toggleState === 3
//                 ? "services__modal active-modal"
//                 : "services__modal"
//             }
//           >
//             <div className="services__modal-content">
//               <i
//                 className=" uil-times services__modal-close"
//                 onClick={() => toggleTab(0)}
//               ></i>
//               <h3 className="services__modal-title">Visual Designer</h3>
//               <p className="services__modal-description">
//                 Service with more than 1 years of experience. Providing quality
//                 work to clients and companies .
//               </p>

//               <ul className="services__modal-services grid">
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I develop the user interface
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I design responsive websites
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I optimize website performance
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I offer website maintenance and support
//                   </p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

//!!!! __________________________________________________
//!!!! __________________________________________________

import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (i) => {
    setToggleState(i);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-react services__icon"></i>
            <h3 className="services__title">Web Development</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More<i className="uil-arrow-right services__icon-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className=" uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Web Development</h3>
              <p className="services__modal-description">
                Offering web development services using HTML, CSS, JavaScript,
                React, and Bootstrap. Expertise in creating responsive and
                user-friendly web applications.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Building dynamic and interactive websites
                  </p>
                </li>
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Implementing responsive design principles
                  </p>
                </li>
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Utilizing React and Bootstrap for efficient development
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-database services__icon"></i>
            <h3 className="services__title">Database Management</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More<i className="uil-arrow-right services__icon-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className=" uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Database Management</h3>
              <p className="services__modal-description">
                Providing database management solutions using MySQL and NoSQL
                databases like MongoDB. Ensuring efficient data storage and
                retrieval for your applications.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Setting up and configuring MySQL databases
                  </p>
                </li>
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Implementing MongoDB for flexible data storage
                  </p>
                </li>
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Optimizing database performance and scalability
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 32 32"
              id="nodejs"
            >
              <path
                fill="#444"
                d="M5.304 16.563a.265.265 0 0 0-.132-.23L2.98 15.072a.26.26 0 0 0-.121-.035h-.023a.264.264 0 0 0-.121.035L.524 16.333a.265.265 0 0 0-.133.23l.005 3.396a.13.13 0 0 0 .066.114.13.13 0 0 0 .132 0l1.302-.746a.267.267 0 0 0 .132-.23V17.51c0-.094.05-.182.132-.229l.555-.319a.272.272 0 0 1 .265 0l.554.319a.264.264 0 0 1 .132.229v1.587c0 .095.051.181.133.23l1.302.746a.13.13 0 0 0 .132 0 .133.133 0 0 0 .066-.114l.004-3.396zm11.702-4.669c-.041-.023-.091-.022-.131.002s-.065.067-.065.114v3.363a.093.093 0 0 1-.139.08l-.549-.316a.267.267 0 0 0-.265 0l-2.192 1.265a.265.265 0 0 0-.133.229v2.531c0 .095.05.182.132.229l2.192 1.266a.267.267 0 0 0 .265 0l2.193-1.266a.265.265 0 0 0 .132-.229v-6.309a.265.265 0 0 0-.136-.231l-1.305-.728zm-.203 6.437a.063.063 0 0 1-.033.057l-.753.434a.065.065 0 0 1-.066 0l-.753-.434a.065.065 0 0 1-.033-.057v-.869c0-.024.013-.046.033-.057l.753-.435a.065.065 0 0 1 .066 0l.753.435c.02.012.033.034.033.057v.869zm8.047-.892a.265.265 0 0 0 .132-.229v-.613a.264.264 0 0 0-.132-.229l-2.178-1.265a.262.262 0 0 0-.265 0l-2.192 1.265a.264.264 0 0 0-.132.229v2.53c0 .095.051.183.134.23l2.178 1.241c.08.046.179.046.26.001l1.317-.732c.041-.023.067-.067.068-.115s-.025-.092-.066-.116l-2.206-1.266a.131.131 0 0 1-.066-.115v-.793c0-.047.025-.091.066-.115l.687-.395a.135.135 0 0 1 .132 0l.687.395a.132.132 0 0 1 .066.115v.624c0 .047.025.091.066.115s.092.023.133 0l1.312-.763zM9.291 15.09a.267.267 0 0 1 .265 0l2.192 1.265a.263.263 0 0 1 .132.229v2.532a.265.265 0 0 1-.132.229l-2.192 1.266a.267.267 0 0 1-.265 0l-2.192-1.266a.264.264 0 0 1-.132-.229v-2.532c0-.095.05-.182.132-.229l2.192-1.265zm19.815 5.557a.438.438 0 0 1-.217-.058l-.69-.408c-.103-.058-.052-.078-.019-.09.137-.048.165-.059.312-.142.015-.009.036-.005.052.004l.53.315a.066.066 0 0 0 .064 0l2.067-1.193a.065.065 0 0 0 .031-.056v-2.386a.067.067 0 0 0-.032-.057l-2.066-1.192a.066.066 0 0 0-.064 0l-2.066 1.192a.066.066 0 0 0-.033.057v2.386c0 .023.013.044.032.055l.566.327c.307.154.495-.027.495-.209v-2.355a.06.06 0 0 1 .06-.059h.262a.06.06 0 0 1 .06.059v2.355c0 .41-.223.645-.612.645-.119 0-.214 0-.476-.129l-.542-.312a.436.436 0 0 1-.217-.377v-2.386c0-.155.083-.3.217-.377l2.067-1.194a.452.452 0 0 1 .434 0l2.067 1.194a.436.436 0 0 1 .217.377v2.386a.437.437 0 0 1-.217.377l-2.067 1.193a.436.436 0 0 1-.218.058zm.639-1.643c-.905 0-1.094-.415-1.094-.764 0-.033.026-.059.06-.059h.267a.06.06 0 0 1 .059.051c.04.272.16.41.708.41.435 0 .621-.099.621-.329 0-.133-.052-.232-.729-.298-.565-.056-.915-.181-.915-.633 0-.417.352-.666.941-.666.662 0 .99.23 1.031.723.002.017-.004.033-.016.046s-.027.019-.044.019h-.268a.06.06 0 0 1-.058-.047c-.064-.286-.221-.378-.645-.378-.475 0-.531.166-.531.29 0 .151.065.194.707.279.635.084.937.203.937.649 0 .45-.375.708-1.03.708zm-7.239-1.683a.052.052 0 0 1 .051 0l.421.243a.05.05 0 0 1 .026.044v.486a.05.05 0 0 1-.026.044l-.421.243a.052.052 0 0 1-.051 0l-.42-.243a.05.05 0 0 1-.025-.044v-.486c0-.018.01-.035.025-.044l.42-.243z"
              ></path>
            </svg>{" "}
            <h3 className="services__title">Backend Development</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More<i className="uil-arrow-right services__icon-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className=" uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Backend Development</h3>
              <p className="services__modal-description">
                Specializing in backend development using Node.js, Express,
                Laravel, and Python. Building robust server-side solutions to
                power your web applications.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Creating RESTful APIs with Node.js and Express
                  </p>
                </li>
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Developing scalable backend architectures
                  </p>
                </li>
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Using Laravel and Python for efficient backend development
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
