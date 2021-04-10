import "./content.css";
import Button from "react-bootstrap/Button";
export default function Content() {
  return (
    <>
      <section className="content-section">
        <div className="container">
          <div className="row ">
            <div className="col-12 adTop"></div>
          </div>
          <div className="row">
            <div className="col-md-2 mt-3 adLeft"></div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-12"></div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 text-center contentPaddingTop">
                      <p>Next Draw</p>
                      <p>Thursday 08/04/2021</p>
                    </div>
                    <div className="col-md-4 text-center contentPaddingTop">
                      <p>Countdown for next Draw</p>
                      <p className="price">00:15:00</p>
                      <p>
                        <span className="pl-1">hr</span>{" "}
                        <span className="pl-2">min</span>{" "}
                        <span className="pl-2">sec</span>
                      </p>
                    </div>
                    <div className="col-md-4 text-center contentPaddingTop">
                      <p>Next Jackpots Price Pool</p>
                      <span className="price">$100,000</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="row">
                    <div className="col-12 contentPaddingTop text-center">
                      <button className="btn btn-primary playNowBtn">
                        Play Now
                      </button>
                      <p className="time">Time Remaining</p>
                      <p className="timer">00:15:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <div className="jackpotBox">
                    <div className="row">
                      <div className="col-md-2 pt-3 text-center">
                        <span>Lotto 60</span>
                        <br />
                        <span>Jackpot</span>
                      </div>
                      <div className="col-md-7">
                        <div className="row">
                          <div className="col-md-10">
                            <div className="row marginResponsive">
                              <div className="col-md-2">
                                <div className="sphere">
                                  <section className="stage">
                                    <figure className="ball red">
                                      <span className="shadow"></span>
                                      <span className="eight"></span>
                                    </figure>
                                  </section>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="sphere">
                                  <section className="stage">
                                    <figure className="ball">
                                      <span className="shadow"></span>
                                      <span className="eight"></span>
                                    </figure>
                                  </section>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="sphere">
                                  <section className="stage">
                                    <figure className="ball red">
                                      <span className="shadow"></span>
                                      <span className="eight"></span>
                                    </figure>
                                  </section>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="sphere">
                                  <section className="stage">
                                    <figure className="ball green">
                                      <span className="shadow"></span>
                                      <span className="eight"></span>
                                    </figure>
                                  </section>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="sphere">
                                  <section className="stage">
                                    <figure className="ball">
                                      <span className="shadow"></span>
                                      <span className="eight"></span>
                                    </figure>
                                  </section>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="sphere">
                                  <section className="stage">
                                    <figure className="ball red">
                                      <span className="shadow"></span>
                                      <span className="eight"></span>
                                    </figure>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 pt-4 text-center">
                        <Button variant="primary" className="btnCustom responsive">
                          Play For Jackpot
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-4">
                  <ul className="PreviousDraw">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12 removePadding">
                          <p className="pb-2 previousDrawFont">Previous Draw</p>
                        </div>
                        <div className="col-md-6 removePadding text-left">
                          <small>Apr 07,23:00</small>
                        </div>
                        <div className="col-md-6 paddingMobile">
                          <small>Price Pool $1,00,000</small>
                        </div>
                      </div>
                    </div>
                    <li className="mt-3">
                      <i className="fas fa-baseball-ball baseballPreviousDraw baseballRed">
                        <span className="baseBallNumber">0</span>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa-baseball-ball baseballPreviousDraw baseballRed">
                        <span className="baseBallNumber">2</span>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa-baseball-ball baseballPreviousDraw fontWhite">
                        <span className="baseBallNumber">25</span>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa-baseball-ball baseballPreviousDraw baseballRed">
                        <span className="baseBallNumber">15</span>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa-baseball-ball baseballPreviousDraw fontWhite">
                        <span className="baseBallNumber">1</span>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa-baseball-ball baseballPreviousDraw baseballCyan">
                        <span className="baseBallNumber">2</span>
                      </i>
                    </li>
                  </ul>
                </div>

                <div className="col-4 pt-5">
                  <ul className="PreviousDraw ulResponsive">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-md-6 removePadding">
                          <small>Apr 07,23:00</small>
                        </div>
                        <div className="col-md-6 paddingMobile">
                          <small>Price Pool $1,00,000</small>
                        </div>
                      </div>
                    </div>
                    <li className="mt-3">
                      <i className="fas fa-baseball-ball baseballPreviousDraw baseballRed">
                        <span className="baseBallNumber">0</span>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa-baseball-ball baseballPreviousDraw baseballRed">
                        <span className="baseBallNumber">2</span>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa-baseball-ball baseballPreviousDraw fontWhite">
                        <span className="baseBallNumber">25</span>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa-baseball-ball baseballPreviousDraw baseballRed">
                        <span className="baseBallNumber">15</span>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa-baseball-ball baseballPreviousDraw fontWhite">
                        <span className="baseBallNumber">1</span>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa-baseball-ball baseballPreviousDraw baseballCyan">
                        <span className="baseBallNumber">2</span>
                      </i>
                    </li>
                  </ul>
                </div>

                <div className="col-4 pt-5">
                  <ul className="PreviousDraw ulResponsive">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-md-6 removePadding">
                          <small>Apr 07,23:00</small>
                        </div>
                        <div className="col-md-6 paddingMobile">
                          <small>Price Pool $1,00,000</small>
                        </div>
                      </div>
                    </div>
                    <li className="mt-3">
                      <i className="fas fa-baseball-ball baseballPreviousDraw baseballRed">
                        <span className="baseBallNumber">0</span>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa-baseball-ball baseballPreviousDraw baseballRed">
                        <span className="baseBallNumber">2</span>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa-baseball-ball baseballPreviousDraw fontWhite">
                        <span className="baseBallNumber">25</span>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa-baseball-ball baseballPreviousDraw baseballRed">
                        <span className="baseBallNumber">15</span>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa-baseball-ball baseballPreviousDraw fontWhite">
                        <span className="baseBallNumber">1</span>
                      </i>
                    </li>
                    <li>
                      <i className="fas fa-baseball-ball baseballPreviousDraw baseballCyan">
                        <span className="baseBallNumber">2</span>
                      </i>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12">
                  <div className="footerCustomContainer">
                    <div className="row p-3">
                      <div className="col-md-4 cardResponsive">
                        Recent Draw{" "}
                        <span>
                          <i className="fas fa-calendar-alt"></i>
                        </span>
                      </div>
                      <div className="col-md-4"></div>
                      <div className="col-md-4"></div>
                    </div>
                    <div className="row p-lg-3">
                      <div className="col-md-5 cardResponsive">
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
                    <div className="row p-lg-3">
                      <div className="col-md-5 cardResponsive">
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
                    <div className="row p-lg-3">
                      <div className="col-md-5 cardResponsive">
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
                    <div className="row p-lg-3">
                      <div className="col-md-5 cardResponsive">
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
                    <div className="row p-lg-3">
                      <div className="col-md-5 cardResponsive">
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
            </div>
            <div className="col-md-2 mt-3 adLeft"></div>
          </div>
        </div>
      </section>
    </>
  );
}
