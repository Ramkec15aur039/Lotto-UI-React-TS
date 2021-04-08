import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="row p-lg-5">
        <div className="col-12 footerMain">
          <div className="footerCustomContainer">
            <div className="row p-3">
              <div className="col-md-4">
                Recent Draw{" "}
                <span>
                  <i className="fas fa-calendar-alt"></i>
                </span>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>
            <div className="row p-lg-3">
              <div className="col-md-5">
                <p>Winning Numbers</p>
                <ul className="winningNumbers">
                  <li>
                    <i className="fas fa-baseball-ball footerBaseBall baseballRed">
                      <span className="baseBallNumber">0</span>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-baseball-ball footerBaseBall baseballRed">
                      <span className="baseBallNumber">2</span>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-baseball-ball footerBaseBall fontWhite">
                      <span className="baseBallNumber">25</span>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-baseball-ball footerBaseBall baseballRed">
                      <span className="baseBallNumber">15</span>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-baseball-ball footerBaseBall fontWhite">
                      <span className="baseBallNumber">1</span>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-baseball-ball footerBaseBall baseballCyan">
                      <span className="baseBallNumber">2</span>
                    </i>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 text-center">
                <p>No. of Winners</p>
                <p>7</p>
              </div>
              <div className="col-md-4 text-center">
                <p>Date & Time</p>
                <small>April 5, 6.00pm</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
