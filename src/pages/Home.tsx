import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function Home() {
  return (
    <div>
      <Header />
      <div className="mainClass">
        <div className="txt">
          <h1>
            The Education You Want <br /> The Attention You Deserve
          </h1>
          <button className="button">Read More</button>
          <button className="button">Get Started</button>
        </div>
        <div className="description">
          <h1>Welcome to Hoxton University</h1>
          <p>
            With nearly 26500 students and 150 degree programs, we are thr
            largest comprehensive university of Hoxton. Our hands-on,practical
            approach to teaching,ensure you are prepared for your career and
            life after graduation. learning , and faculty dedicated to teaching
            ensure you are prepared for your career and life after graduation.
          </p>
        </div>
        <div className="tags">
          <div className="tagline-user container">
            <div className="tagline-box py-3 pl-3">
              <div className="tagline-name ">
                <svg
                  width="35"
                  height="29"
                  viewBox="0 0 35 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.375 14.5C27.79 14.5 29.7325 12.18 29.7325 9.32143C29.7325 6.46286 27.79 4.14286 25.375 4.14286C22.96 4.14286 21 6.46286 21 9.32143C21 12.18 22.96 14.5 25.375 14.5ZM12.25 12.4286C15.155 12.4286 17.4825 9.65286 17.4825 6.21429C17.4825 2.77571 15.155 0 12.25 0C9.345 0 7 2.77571 7 6.21429C7 9.65286 9.345 12.4286 12.25 12.4286ZM25.375 18.6429C22.1725 18.6429 15.75 20.5486 15.75 24.3393V29H35V24.3393C35 20.5486 28.5775 18.6429 25.375 18.6429ZM12.25 16.5714C8.1725 16.5714 0 18.995 0 23.8214V29H12.25V24.3393C12.25 22.5786 12.8275 19.4921 16.3975 17.1514C14.875 16.7786 13.405 16.5714 12.25 16.5714Z"
                    fill="#7E0E0E"
                  />
                </svg>
              </div>
              <p className="tagline-text pr-3">
                Real World <br /> Experience
              </p>
            </div>
            <div className="tagline-box py-3 pl-3">
              <svg
                width="28"
                height="32"
                viewBox="0 0 28 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9625 20.0381L14 26.0003L8.0375 20.0381C3.56875 20.2318 0 23.8879 0 28.4002V29.0001C0 30.6563 1.34375 32 3 32H25C26.6562 32 28 30.6563 28 29.0001V28.4002C28 23.8879 24.4312 20.2318 19.9625 20.0381ZM0.85 4.98882L1.25 5.08256V8.73238C0.8125 8.99487 0.5 9.4511 0.5 10.0011C0.5 10.526 0.7875 10.9635 1.19375 11.2323L0.21875 15.1258C0.1125 15.5571 0.35 16.0008 0.69375 16.0008H3.30625C3.65 16.0008 3.8875 15.5571 3.78125 15.1258L2.80625 11.2323C3.2125 10.9635 3.5 10.526 3.5 10.0011C3.5 9.4511 3.1875 8.99487 2.75 8.73238V5.44505L6.875 6.43875C6.3375 7.5137 6 8.71364 6 10.0011C6 14.4196 9.58125 18.0007 14 18.0007C18.4187 18.0007 22 14.4196 22 10.0011C22 8.71364 21.6687 7.5137 21.125 6.43875L27.1437 4.98882C28.2812 4.71383 28.2812 3.29515 27.1437 3.02016L15.2437 0.145305C14.4312 -0.0484351 13.575 -0.0484351 12.7625 0.145305L0.85 3.01392C-0.28125 3.2889 -0.28125 4.71383 0.85 4.98882Z"
                  fill="#7E0E0E"
                />
              </svg>

              <p className="tagline-text pr-3">
                The focus on <br /> student Success
              </p>
            </div>
            <div className="tagline-box py-3 pl-3">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.5784 26.8015L24.5414 20.7656C24.269 20.4931 23.8996 20.3418 23.5121 20.3418H22.5251C24.1963 18.2047 25.1893 15.5166 25.1893 12.5925C25.1893 5.63636 19.552 0 12.5947 0C5.63733 0 0 5.63636 0 12.5925C0 19.5487 5.63733 25.185 12.5947 25.185C15.5193 25.185 18.2078 24.1922 20.3452 22.5212V23.5081C20.3452 23.8955 20.4966 24.2648 20.7691 24.5373L26.8061 30.5732C27.3752 31.1423 28.2956 31.1423 28.8588 30.5732L30.5724 28.8599C31.1415 28.2908 31.1415 27.3706 30.5784 26.8015ZM12.5947 20.3418C8.31369 20.3418 4.8441 16.8788 4.8441 12.5925C4.8441 8.31227 8.30764 4.84328 12.5947 4.84328C16.8756 4.84328 20.3452 8.30622 20.3452 12.5925C20.3452 16.8728 16.8817 20.3418 12.5947 20.3418Z"
                  fill="#7E0E0E"
                />
              </svg>

              <p className="tagline-text pr-3">
                Research <br /> Opportunities
              </p>
            </div>
            <div className="tagline-box py-3 pl-3">
              <svg
                width="27"
                height="30"
                viewBox="0 0 27 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.84211 12.8571V22.8571H7.10526V12.8571H2.84211ZM11.3684 12.8571V22.8571H15.6316V12.8571H11.3684ZM0 30H27V25.7143H0V30ZM19.8947 12.8571V22.8571H24.1579V12.8571H19.8947ZM13.5 0L0 7.14286V10H27V7.14286L13.5 0Z"
                  fill="#7E0E0E"
                />
              </svg>

              <p className="tagline-text pr-3">
                3 Campus <br /> Locations
              </p>
            </div>
          </div>
        </div>

        <div className="bottom">
          <ul className="bottomlist">
            <li className="listTxt">
              <svg
                width="37"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.3733 0H4.08761C3.06463 0 2.08355 0.406377 1.3602 1.12973C0.636845 1.85309 0.230469 2.83416 0.230469 3.85714L0.230469 32.1429C0.230469 33.1658 0.636845 34.1469 1.3602 34.8703C2.08355 35.5936 3.06463 36 4.08761 36H32.3733C33.3963 36 34.3774 35.5936 35.1007 34.8703C35.8241 34.1469 36.2305 33.1658 36.2305 32.1429V3.85714C36.2305 2.83416 35.8241 1.85309 35.1007 1.12973C34.3774 0.406377 33.3963 0 32.3733 0ZM31.0563 24.6994L29.8509 29.9226C29.7897 30.1881 29.6403 30.4251 29.4271 30.5948C29.2139 30.7646 28.9494 30.857 28.6769 30.8571C15.8198 30.8571 5.37333 20.434 5.37333 7.55357C5.38289 7.28362 5.47885 7.02386 5.64708 6.81252C5.81532 6.60117 6.04694 6.44941 6.30788 6.37955L11.5311 5.1742C11.6202 5.15535 11.7109 5.14486 11.8019 5.14286C12.035 5.15462 12.2607 5.22857 12.4555 5.35701C12.6504 5.48546 12.8073 5.66373 12.91 5.8733L15.3207 11.4983C15.3798 11.65 15.4127 11.8105 15.418 11.9732C15.3983 12.33 15.2397 12.665 14.976 12.9062L11.9313 15.3972C13.7761 19.3073 16.9231 22.4543 20.8332 24.2992L23.3243 21.2545C23.5655 20.9908 23.9004 20.8321 24.2573 20.8125C24.4199 20.8177 24.5805 20.8506 24.7322 20.9097L30.3572 23.3204C30.5668 23.423 30.7452 23.5799 30.8737 23.7748C31.0021 23.9697 31.076 24.1954 31.0876 24.4286C31.086 24.5196 31.0755 24.6103 31.0563 24.6994Z"
                  fill="#FDC708"
                />
              </svg>
              <p>
                Phone <br /> +35565451651
              </p>
            </li>
            <li className="listTxt">
              <svg
                width="37"
                height="32"
                viewBox="0 0 37 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2305 28C8.63047 28 7.03047 26.6 6.23047 26C2.23047 23.2 1.03047 22.2 0.230469 21.6V30C0.230469 31.1044 1.12609 32 2.23047 32H18.2305C19.3348 32 20.2305 31.1044 20.2305 30V21.6C19.4305 22.2 18.2305 23.2 14.2305 26C13.4305 26.6 11.8305 28 10.2305 28ZM18.2305 16H2.23047C1.12609 16 0.230469 16.8956 0.230469 18V19C1.83047 20.2 1.63047 20.2 7.43047 24.4C8.03047 24.8 9.23047 26 10.2305 26C11.2305 26 12.4305 24.8 13.0305 24.6C18.8305 20.4 18.6305 20.4 20.2305 19.2V18C20.2305 16.8956 19.3348 16 18.2305 16ZM34.2305 10H14.2305C13.1261 10 12.2305 10.8956 12.2305 12V14H18.2305C20.3061 14 22.0173 15.5888 22.2123 17.6138L22.2305 17.6V26H34.2305C35.3348 26 36.2305 25.1044 36.2305 24V12C36.2305 10.8956 35.3348 10 34.2305 10ZM32.2305 18H28.2305V14H32.2305V18ZM10.2305 12C10.2305 9.79437 12.0248 8 14.2305 8H28.2305V2C28.2305 0.895625 27.3348 0 26.2305 0H6.23047C5.12609 0 4.23047 0.895625 4.23047 2V14H10.2305V12Z"
                  fill="#FDC708"
                />
              </svg>
              <p>
                Email <br /> hoxton@gmail.com
              </p>
            </li>
            <li className="listTxt">
              <svg
                width="24"
                height="34"
                viewBox="0 0 24 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.36571 0 0 5.321 0 11.9C0 20.825 12 34 12 34C12 34 24 20.825 24 11.9C24 5.321 18.6343 0 12 0ZM12 16.15C9.63429 16.15 7.71429 14.246 7.71429 11.9C7.71429 9.554 9.63429 7.65 12 7.65C14.3657 7.65 16.2857 9.554 16.2857 11.9C16.2857 14.246 14.3657 16.15 12 16.15Z"
                  fill="#FDC708"
                />
              </svg>
              <p>
                Address <br /> Main Street 1558
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
