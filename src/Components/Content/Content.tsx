
export default function Content() {
  return (
    <section className="container content-section">
      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4 text-center contentPaddingTop">
              <p>Next Jackpots Price Pool</p>
              <span className="price">$100,000</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 ">
              <p className="jackpotFont">Jackpot</p>
            </div>
            <div className="col-md-10 p-lg-4">
              <div className="row">
                <ul className="displayProperty">
                  <li>
                    <i className="fas fa-baseball-ball baseball baseballRed">
                      <span className="baseBallNumber">0</span>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-baseball-ball baseball baseballRed">
                      <span className="baseBallNumber">2</span>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-baseball-ball baseball fontWhite">
                      <span className="baseBallNumber">25</span>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-baseball-ball baseball baseballRed">
                      <span className="baseBallNumber">15</span>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-baseball-ball baseball fontWhite">
                      <span className="baseBallNumber">1</span>
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-baseball-ball baseball baseballCyan">
                      <span className="baseBallNumber">2</span>
                    </i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="row">
            <div className="col-12 contentPaddingTop text-center">
              <button className="btn btn-primary playNowBtn">Play Now</button>
              <p className="time">Time Remaining</p>
              <p className="timer">00:15:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>Previous Draw</p>
          <ul className="PreviousDraw">
            <li>
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
      <div className="row">
        <div className="col-12">
          <p>
            Price Pool
            <span>
              <button className="btn btn-primary btnMargin">$1,00,000</button>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
