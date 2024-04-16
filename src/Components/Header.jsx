import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Header() {
  return (
    <>
      <div className="hdr1">
        <header className="hdr2">
          <a href="#">
            <img className="brand" src="goibibo.png" alt="" />
          </a>
          <ul className="lNqfU">
            <li className="flight">
              <a href="flight" target="_self" className="f1">
                <img className="flight_img" src="flight.png" alt="" />
                <span className="flight_txt">Flights</span>
              </a>
            </li>
            <li className="flight">
              <a href="flight" target="_self" className="f1">
                <img className="flight_img" src="hotel.png" alt="" />
                <span className="flight_txt">Hotels</span>
              </a>
            </li>
            <li className="flight">
              <a href="flight" target="_self" className="f1">
                <img className="flight_img" src="train.png" alt="" />
                <span className="flight_txt">Trains</span>
              </a>
            </li>
            <li className="flight">
              <a href="flight" target="_self" className="f1">
                <img className="flight_img" src="cab.png" alt="" />
                <span className="flight_txt">Cabs</span>
              </a>
            </li>
            <li className="flight">
              <a href="flight" target="_self" className="f1">
                <img className="flight_img" src="bus.png" alt="" />
                <span className="flight_txt">Bus</span>
              </a>
            </li>
            <li className="flight">
              <a href="flight" target="_self" className="f1">
                <img className="flight_img" src="holidays.png" alt="" />
                <span className="flight_txt">Holidays</span>
              </a>
            </li>
            <li className="flight">
              <a href="flight" target="_self" className="f1">
                <img className="flight_img" src="forex.png" alt="" />
                <span className="flight_txt">Forex</span>
              </a>
            </li>
          </ul>
          <div className="book_login">
            <a href="#" className="mng">
              <div className="manage">
                <img className="bokkings" src="bookings.png" alt="" />
                <span>
                  <div>
                    <span className="trips">My trips</span>
                    <span className="mng_book">
                      <br /> Manage bookings
                    </span>
                  </div>
                </span>
              </div>
            </a>
            <div className="login">
              <button type="button" class="btn btn-primary">
                {/* <img className="profile" src="profile.png" alt="" /> */}
                <i class="bi bi-person"></i> LOGIN / SIGNUP{" "}
                <i class="bi bi-caret-down-fill"></i>
              </button>
            </div>
          </div>
        </header>
      </div>
      <div class="sc-8tr38v-1 Qijzj"></div>
      <div className="sc-1gt8xf5-0 bPZJjI">
        <h2 class="sc-1gt8xf5-2 eSDlpf">Domestic and International Flights</h2>
        <div className="sc-1gt8xf5-3 helaNf">
          <div className="sc-12foipm-30 cYbSgs">
            <div className="sc-12foipm-35 eovnKd">
              <ul class="sc-12foipm-82 bTstQQ">
                <li class="sc-12foipm-83 bPVSWg">
                  <span class="sc-12foipm-84 ddHDin"></span>
                  <p class="sc-gEvEer gpfTmR">One-way</p>
                </li>
                <li class="sc-12foipm-83 TdSAp">
                  <span class="sc-12foipm-84 CHCvS"></span>
                  <p class="sc-gEvEer gpfTmR">Round-trip</p>
                </li>
                <li class="sc-12foipm-83 TdSAp">
                  <span class="sc-12foipm-84 CHCvS"></span>
                  <p class="sc-gEvEer gpfTmR">Multi-city</p>
                </li>
              </ul>
            </div>
            <div className="fields">
              <Row className="g-2">
                <Col md>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="from"
                    className="mb-3"
                  >
                    <Form.Control type="from" placeholder="from" />
                  </FloatingLabel>
                </Col>

                <Col md>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="to"
                    className="mb-3 to"
                  >
                    <Form.Control type="to" placeholder="to" />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel controlId="floatingSelectGrid" label="Date">
                    <Form.Select aria-label="Floating label select example">
                      <option>Select date</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="return"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Click to add a return flight for better discounts"
                    />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Travellers and class"
                  >
                    <Form.Select aria-label="Floating label select example">
                      <option>1 Adult</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>
            </div>
            <div className="sc-12foipm-31 bTdRNA">
              <div className="sc-12foipm-32 leeMgZ">
                <div className="sc-12foipm-88 kKmATd">
                  <div className="sc-12foipm-89 bnVrvC">
                    <div className="sc-12foipm-90 hrFbUJ">
                      <font color="#FFFFFF">More Benefits</font>
                    </div>
                    <div className="sc-12foipm-91 eXTxLP">
                      <font color="#222222">
                        <b>Special Fares</b>
                      </font>
                    </div>
                  </div>
                  <div className="sc-12foipm-92 cNgebP">
                    <div className="sc-12foipm-98 kQxejq">
                      <input
                        type="radio"
                        name="speacialFare"
                        id="ST"
                        className="sc-12foipm-104 fnJDSM"
                      />
                      <label htmlFor="ST" className="sc-12foipm-100 kNeEhL">
                        <div className="sc-12foipm-103 czeAkn" />
                        <div className="sc-12foipm-101 eTZJTS">
                          <img
                            src="https://gos3.ibcdn.com/student-1687501001.png"
                            width={32}
                            height={32}
                            alt="ST"
                          />
                          <div className="sc-12foipm-102 crTEVl marginL10">
                            <div>Student</div>
                            <div>
                              <font color="#717171">Extra Baggage</font>
                            </div>
                          </div>
                        </div>
                      </label>
                      <div
                        width="130%"
                        className="sc-12foipm-105 joFUDs leftToolTip overToolTip"
                      >
                        <p>
                          <font color="#FFFFFF">
                            <b>Student Fare</b>
                          </font>
                        </p>
                        <p>
                          <font color="#FFFFFF">
                            Only students above 12 years of age are eligible for
                            special fares and/or additional baggage allowances.
                            Carrying valid student ID cards and student visas
                            (where applicable) is mandatory, else the passenger
                            may be denied boarding or asked to pay for extra
                            baggage.
                          </font>
                        </p>
                      </div>
                    </div>
                    <div className="sc-12foipm-98 kQxejq">
                      <input
                        type="radio"
                        name="speacialFare"
                        id="SC"
                        className="sc-12foipm-104 fnJDSM"
                      />
                      <label htmlFor="SC" className="sc-12foipm-100 kNeEhL">
                        <div className="sc-12foipm-103 czeAkn" />
                        <div className="sc-12foipm-101 eTZJTS">
                          <img
                            src="https://gos3.ibcdn.com/seniorCitizen-1687500989.png"
                            width={32}
                            height={32}
                            alt="SC"
                          />
                          <div className="sc-12foipm-102 crTEVl marginL10">
                            <div>Senior Citizen</div>
                            <div>
                              <font color="#717171">Exclusive Discounts</font>
                            </div>
                          </div>
                        </div>
                      </label>
                      <div
                        width="130%"
                        className="sc-12foipm-105 joFUDs leftToolTip overToolTip"
                      >
                        <p>
                          <font color="#FFFFFF">
                            <b>Senior Citizen Fare</b>
                          </font>
                        </p>
                        <p>
                          <font color="#FFFFFF">
                            Only senior citizens above the age of 60 years can
                            avail this special fare. It is mandatory to produce
                            proof of Date of Birth at the airport, without which
                            prevailing fares will be charged.
                          </font>
                        </p>
                      </div>
                    </div>
                    <div className="sc-12foipm-98 kQxejq">
                      <input
                        type="radio"
                        name="speacialFare"
                        id="AF"
                        className="sc-12foipm-104 fnJDSM"
                      />
                      <label htmlFor="AF" className="sc-12foipm-100 kNeEhL">
                        <div className="sc-12foipm-103 czeAkn" />
                        <div className="sc-12foipm-101 eTZJTS">
                          <img
                            src="https://gos3.ibcdn.com/defence-1687500960.png"
                            width={32}
                            height={32}
                            alt="AF"
                          />
                          <div className="sc-12foipm-102 crTEVl marginL10">
                            <div>Armed Forces</div>
                            <div>
                              <font color="#717171">Exclusive Discounts</font>
                            </div>
                          </div>
                        </div>
                      </label>
                      <div
                        width="130%"
                        className="sc-12foipm-105 joFUDs leftToolTip overToolTip"
                      >
                        <p>
                          <font color="#FFFFFF">
                            <b>Armed Forces Fare</b>
                          </font>
                        </p>
                        <p>
                          <font color="#FFFFFF">
                            Applicable for serving and retired personnel of
                            Armed Forces and Paramilitary Forces, their
                            recognised dependants like spouses and children, and
                            war widows. It is mandatory to show a valid ID or
                            dependant card at the airport, without which
                            boarding might be denied.
                          </font>
                        </p>
                      </div>
                    </div>
                    <div className="sc-12foipm-98 kQxejq">
                      <input
                        type="radio"
                        name="speacialFare"
                        id="D"
                        className="sc-12foipm-104 fnJDSM"
                      />
                      <label htmlFor="D" className="sc-12foipm-100 kNeEhL">
                        <div className="sc-12foipm-103 czeAkn" />
                        <div className="sc-12foipm-101 eTZJTS">
                          <img
                            src="https://gos3.ibcdn.com/doctorNurses-1687500975.png"
                            width={32}
                            height={32}
                            alt="D"
                          />
                          <div className="sc-12foipm-102 crTEVl marginL10">
                            <div>Doctors &amp; Nurses</div>
                            <div>
                              <font color="#717171">Exclusive Discounts</font>
                            </div>
                          </div>
                        </div>
                      </label>
                      <div
                        width="130%"
                        className="sc-12foipm-105 joFUDs leftToolTip overToolTip"
                      >
                        <p>
                          <font color="#FFFFFF">
                            <b>Doctors &amp; Nurses Fare</b>
                          </font>
                        </p>
                        <p>
                          <font color="#FFFFFF">
                            Applicable only for medical personnel. It is
                            mandatory to show a valid ID at the airport, without
                            which boarding may be denied.
                          </font>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sc-12foipm-85 kSdJvm">
              <span class="sc-12foipm-86 cRVyVW">SEARCH FLIGHTS</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
