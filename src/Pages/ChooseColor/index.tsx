import React, { useEffect } from "react";
import NavgiationBar from "../../Components/NavigationBar/Navgationbar";
import Button from "react-bootstrap/Button";
import "../PlayForJackpot/playForJackpot.css";
import "../JackpotBet/jackpotBet.css";
import "./ChooseColor.css";

export default function ChooseColor() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavgiationBar />
      <section className="playForJackpot container">
        <div className="row">
          <div className="col-md-7 colPadding">
            <div className="row">
              <div className="col-12 text-center">
                <h3 className="text-center">Choose Colors</h3>
              </div>
            </div>
            <div className="row jackpotBetMargin">
              <div className="col-md-12">
                <ul className="displayProperty chooseColor">
                  <li>
                    <i className="fas fa-baseball-ball baseball">
                      <span className="baseBallNumber"></span>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-baseball-ball baseball">
                      <span className="baseBallNumber"></span>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-baseball-ball baseball">
                      <span className="baseBallNumber"></span>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-baseball-ball baseball">
                      <span className="baseBallNumber"></span>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-baseball-ball baseball">
                      <span className="baseBallNumber"></span>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-baseball-ball baseball">
                      <span className="baseBallNumber"></span>
                    </i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-3 submitBet">
                <Button variant="primary" className="btnCustom">
                  Continue
                </Button>
              </div>
              <div className="col-md-3 submitBet">
                <Button variant="outline-primary" className="skipButton">
                  Skip
                </Button>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
          <div className="col-md-4 yourBets">
            <div className="row colPadding">
              <div className="col-12">
                <h3>Your Bets</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="mt-3">Jackpot Bets</p>
                <div className="row">
                  <div className="col-12 rowPositionMain">
                    <div className="row">
                      <div className="col-12">
                        <ul className="PreviousDraw paddingLeft">
                          <li>
                            <i className="fas fa-baseball-ball baseballPreviousDraw size">
                              <span className="baseBallNumber"></span>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa-baseball-ball baseballPreviousDraw size">
                              <span className="baseBallNumber"></span>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa-baseball-ball baseballPreviousDraw size">
                              <span className="baseBallNumber"></span>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa-baseball-ball baseballPreviousDraw size">
                              <span className="baseBallNumber"></span>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa-baseball-ball baseballPreviousDraw size">
                              <span className="baseBallNumber"></span>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa-baseball-ball baseballPreviousDraw size baseballCyan">
                              <span className="baseBallNumber"></span>
                            </i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <ul className="PreviousDraw paddingLeft">
                          <li>
                            <i className="fas fa-baseball-ball baseballPreviousDraw size">
                              <span className="baseBallNumber"></span>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa-baseball-ball baseballPreviousDraw size">
                              <span className="baseBallNumber"></span>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa-baseball-ball baseballPreviousDraw size">
                              <span className="baseBallNumber"></span>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa-baseball-ball baseballPreviousDraw size">
                              <span className="baseBallNumber"></span>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa-baseball-ball baseballPreviousDraw size">
                              <span className="baseBallNumber"></span>
                            </i>
                          </li>
                          <li>
                            <i className="fas fa-baseball-ball baseballPreviousDraw size baseballCyan">
                              <span className="baseBallNumber"></span>
                            </i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-12">
                <p>Red or Black</p>
                <small>No. of bets placed yet</small>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-12">
                <p>Odd or Even</p>
                <small>No. of bets placed yet</small>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-12">
                <p>Over or Under</p>
                <small>No. of bets placed yet</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
