// @flow
import React, { Component, Fragment } from "react";
import "./styles.css";

import {
  getToday,
  getChristmasDay,
  getDaysUntilChristmas,
  checkChristmas
} from "../../util/dateHelpers.js";
import { LocalDate } from "js-joda";

const today: LocalDate = getToday();
const xmasDay: LocalDate = getChristmasDay();
const daysUntilXmas: number = getDaysUntilChristmas(today, xmasDay);
const isXmas = checkChristmas(daysUntilXmas);
const forkMe = {
  position: "absolute",
  top: 0,
  right: 0,
  border: 0
};

class BaubleIcon extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100px"
        height="100px"
        viewBox="0 0 512 512">
        <path d="M256 0c-24.9 0-45 20.1-45 45v30c0 8.4 6.6 15 15 15h60c8.4 0 15-6.6 15-15V45c0-24.9-20.1-45-45-45zm14.99 60.01h-30v-15c0-8.28 6.74-15 15-15h.01c8.26.01 14.99 6.72 14.99 15v15z" fill="#994c0f" />
        <path d="M361 106v54c0 8.399-6.599 15-15 15H166c-8.401 0-15-6.601-15-15v-54c0-24.901 20.099-46 45-46h120c24.901 0 45 21.099 45 46z" fill="#ccefff" />
        <path d="M361 106v54c0 8.399-6.599 15-15 15h-90V60h60c24.901 0 45 21.099 45 46z" fill="#ace3fc" />
        <path d="M451 316c0 7.5-.3 15-1.199 22.5-.838 6.697-27.863 15-27.863 15s21.954 15.062 20.363 20.099C417.7 452.5 344.2 512 256 512S94.3 452.5 69.699 373.599v-.3c-1.608-4.959 14.269-23.08 14.269-23.08s-20.939-4.78-21.769-11.418C61.601 331.3 61 323.8 61 316c0-107.401 87.599-195 195-195s195 87.599 195 195z" fill="#32d736" />
        <path d="M442.301 373.599c1.591-5.037-20.363-20.099-20.363-20.099s27.025-8.304 27.863-15C450.7 331 451 323.5 451 316c0-107.401-87.599-195-195-195v391c88.2 0 161.7-59.5 186.301-138.401z" fill="#10bb67" />
        <circle cx="136" cy="376" r="15" fill="#fff" /><circle cx="196" cy="256" r="15" fill="#fff" />
        <path d="M271 376c0 8.399-6.599 15-15 15s-15-6.601-15-15c0-8.401 6.599-15 15-15s15 6.599 15 15z" fill="#fff" />
        <circle cx="376" cy="376" r="15" fill="#fff" />
        <circle cx="316" cy="256" r="15" fill="#fff" />
        <path d="M271 376c0 8.399-6.599 15-15 15v-30c8.401 0 15 6.599 15 15z" fill="#fff" />
        <circle cx="136" cy="376" r="15" fill="#fd003a" />
        <circle cx="196" cy="256" r="15" fill="#fd003a" />
        <circle cx="256" cy="376" r="15" fill="#fd003a" />
        <circle cx="376" cy="376" r="15" fill="#e50027" />
        <circle cx="316" cy="256" r="15" fill="#e50027" />
        <g>
          <path d="M449.801 338.5c-1.501 11.999-3.9 23.699-7.5 35.099L376 307.299l-49.501 49.2c-5.7 6-15.298 6-20.999 0l-49.5-49.2-49.501 49.2c-5.7 6-15.298 6-20.999 0l-49.5-49.2-66.301 66c-3.6-11.1-5.999-22.5-7.5-34.499l63.301-63.301c5.7-5.999 15.298-5.999 20.999 0l49.501 49.2 49.501-49.2c5.7-5.999 15.298-5.999 20.999 0l49.501 49.2 49.501-49.2c5.7-5.999 15.298-5.999 20.999 0l63.3 63.001z" fill="#fd003a" />
        </g>
        <path d="M305.501 356.499c5.7 6 15.298 6 20.999 0l49.501-49.2 66.301 66.301c3.6-11.4 5.999-23.101 7.5-35.099L386.501 275.5c-5.7-5.999-15.298-5.999-20.999 0L316 324.699l-49.501-49.2A14.434 14.434 0 0 0 256 271v36.299l49.501 49.2z" fill="#e50027" />
      </svg>
    );
  }
}

class DrumIcon extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100px"
        height="100px"
        viewBox="0 0 512.026 512.026">
        <path fill="#fd003a" d="M482.013 413.325v68.701h-452v-272h452v159z" />
        <path fill="#e50027" d="M482.013 413.325v68.701h-226v-272h226v159z" />
        <path d="M413.912 28.526l-157.899 79.799-116.201 58.801c-2.399 1.199-4.499 1.8-6.899 1.8-5.4 0-10.8-3.001-13.5-8.101-3.6-7.5-.599-16.5 6.601-20.4l130-66 144.101-72.9c7.5-3.6 16.5-.601 20.4 6.599 3.598 7.501.597 16.502-6.603 20.402z" fill="#994c0f" />
        <path d="M392.614 160.825c-2.701 5.099-8.101 8.101-13.5 8.101-2.401 0-4.501-.601-6.899-1.8l-116.201-58.801-157.9-79.799c-7.2-3.9-10.201-12.902-6.601-20.402 3.9-7.2 12.9-10.199 20.4-6.599l144.101 72.9 130 66c7.198 3.901 10.199 12.9 6.6 20.4z" fill="#c85f03" />
        <circle cx="377.013" cy="315.026" r="15" fill="#fe9923" />
        <circle cx="135.013" cy="315.026" r="15" fill="#fea832" />
        <circle cx="317.013" cy="375.026" r="15" fill="#fe9923" />
        <circle cx="437.013" cy="375.026" r="15" fill="#fe9923" />
        <circle cx="195.013" cy="375.026" r="15" fill="#fea832" />
        <path d="M407.013 210.026c-24.814 0-45-20.186-45-45s20.186-45 45-45 45 20.186 45 45-20.186 45-45 45z" fill="#fe9923" />
        <path d="M105.013 210.026c-24.814 0-45-20.186-45-45s20.186-45 45-45 45 20.186 45 45-20.186 45-45 45z" fill="#fea832" />
        <path d="M512.013 482.026c0 16.5-13.5 30-30 30h-452c-16.5 0-30-13.5-30-30s13.5-30 30-30h452c16.5 0 30 13.5 30 30z" fill="#fedb41" />
        <path d="M512.013 482.026c0 16.5-13.5 30-30 30h-226v-60h226c16.5 0 30 13.5 30 30z" fill="#fcbf29" />
        <path d="M512.013 210.026c0 16.5-13.5 30-30 30h-452c-16.5 0-30-13.5-30-30s13.5-30 30-30h452c16.5 0 30 13.5 30 30z" fill="#fedb41" />
        <path d="M512.013 210.026c0 16.5-13.5 30-30 30h-226v-60h226c16.5 0 30 13.5 30 30z" fill="#fcbf29" />
        <path d="M256.013 353.725l-50.501-49.2c-5.7-5.999-15.298-5.999-20.999 0l-19.501 19.501-30 29.7-49.501-49.2c-5.7-5.999-15.298-5.999-20.999 0l-34.501 34.2v42.301l45-44.702 49.501 49.2c5.7 6 15.298 6 20.999 0l19.501-19.499 30-29.702 50.501 49.2a14.436 14.436 0 0 0 10.499 4.501v-36.3z" fill="#fea832" />
        <path d="M256.013 353.725l50.501-49.2c5.7-5.999 15.298-5.999 20.999 0l19.501 19.501 30 29.7 49.501-49.2c5.7-5.999 15.298-5.999 20.999 0l34.501 34.2v42.301l-45-44.702-49.501 49.2c-5.7 6-15.298 6-20.999 0l-19.501-19.499-30-29.702-50.501 49.2a14.436 14.436 0 0 1-10.499 4.501v-36.3z" fill="#fe9923" />
        <circle cx="256.013" cy="315.026" r="15" fill="#fea832" />
        <path d="M271.013 315.026c0-8.286-6.716-15-15-15v30c8.284 0 15-6.716 15-15z" fill="#fe9923" />
      </svg>
    );
  }
}


let message;
let icon;
let title;

if (isXmas) {
  message = "Hooray! It is Christmas today!";
  title = "Merry Christmas!";
  icon = <BaubleIcon />;
} else {
  message = "It is only " + daysUntilXmas + " more days until Christmas";
  title = "Stay Strong!";
  icon = <DrumIcon />;
}

class Christmas extends Component {
  render() {
    return (
      <Fragment>
        <h1>When will it be Christmas?</h1>
        <div className="icon">
          {icon}
          <h2>{title}</h2>
        </div>
        <section className="message">
          <p>{message}</p>
        </section>
        <footer className="copyright">
          <p>Icons designed by <a href="https://www.freepik.com/" target="_blank" rel="noopener noreferrer">Freepic.com</a></p>
        </footer>
      </Fragment>
    );
  }
}

export default Christmas;
