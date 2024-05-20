import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Group 14.jpg";
import bannerImage from "../images/2EF1E4DD-8612-4CC8-B818-14B099988E8B 1.jpg";
import logo1 from "../images/logo1 1.png";

function HomePage() {
  const [activeTab, setActiveTab] = useState("domestic");
  return (
    <div>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <Link className="navbar-brand" to="/">
          Track your order
          <img src={logo} alt="logo" className="img-fluid logo ml-3" />
        </Link>
        <div className="navbar-center">
          <img src={logo1} alt="center logo" className="img-fluid nd-logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/service">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-8 p-0">
            <div className="parent-b-img">
              <img src={bannerImage} alt="..." className="img-fluid" />
            </div>
            <div className="parent-b-txt">
              <div className="child-b-txt">
                <h4 className="txt-1 m-0 res-1st">BOOK YOUR SERVICE NOW</h4>
                <h1
                  className="txt-1 m-0 res-1st f-txt"
                  style={{ color: "#919191" }}
                >
                  Fine art service
                </h1>
              </div>
              <div className="child-b-txt-2">
                <h1
                  className="txt-1 m-0 p-txt res-2nd f-txt-1"
                  style={{
                    fontSize: "40px",
                    fontWeight: "700",
                    filter: "drop-shadow(1px 1px 2px black)",
                  }}
                >
                  ON TIME DELIEVERY
                </h1>
                <h1 className="txt-1 m-0 p-txt res-2nd f-txt-2">
                  ECONOMICAL PRICE
                </h1>
                <h1 className="txt-1 m-0 p-txt res-2nd f-txt-2">
                  ZERO DAMAGE POLICY
                </h1>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="parent-b-cont">
                    <div className="b-cont">
                      <h5 className="text-center">Transportation</h5>
                      <ul>
                        <li>
                          Transportation by road should be in fully closed hard
                          walled secured trucks, equipped with a mobile phone
                          and an internal strapping system.  A supply of clean
                          PU Foam, bubble wrap and acid free tissue should be
                          carried.
                        </li>
                        <li>
                          The cargo area of the truck should be clean and free
                          of any loose objects/particles.
                        </li>
                        <li>
                          Works should be crated for transportation, as per
                          Museum specifications.
                        </li>
                        <li>
                          Crates should be strapped or wedged so that they
                          cannot move about when in transit.
                        </li>
                        <li>
                          Crates should be strapped or wedged so that they
                          cannot move about when in transit.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="parent-b-cont">
                    <div className="b-cont">
                      <h5 className="text-center">Airport Supervision</h5>
                      <ul>
                        <li>
                          To handle successful fine art consignment is to have
                          maximum control on the consignment starting from
                          packing, handling, transportation and handover to
                          airlines.
                        </li>

                        <li>
                          The key is to go one step more and oversee the
                          handling at airport, witnessing the palletizing /
                          de-palletizing of the consignment.
                        </li>
                        <li>
                          Permissions for overseeing the handling at airport can
                          be obtained at the time of filing the documents at
                          Customs (depending on the security situation at each
                          city).
                        </li>
                        <li>
                          Professional Art handlers for examination & x-ray
                          handling of crates.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-4">
            <h4>Delhi</h4>
            <div className="parent-side-cont">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "domestic" ? "active" : ""
                    }`}
                    id="domestic-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#domestic"
                    type="button"
                    role="tab"
                    aria-controls="domestic"
                    aria-selected={activeTab === "domestic"}
                    onClick={() => setActiveTab("domestic")}
                  >
                    Domestic
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "international" ? "active" : ""
                    }`}
                    id="international-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#international"
                    type="button"
                    role="tab"
                    aria-controls="international"
                    aria-selected={activeTab === "international"}
                    onClick={() => setActiveTab("international")}
                  >
                    International
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className={`tab-pane fade ${
                    activeTab === "domestic" ? "show active" : ""
                  }`}
                  id="domestic"
                  role="tabpanel"
                  aria-labelledby="domestic-tab"
                >
                  <form>
                    <div className="form-group">
                      <label htmlFor="pickupLocation">Pick up location</label>
                      <input
                        type="text"
                        className="form-control"
                        id="pickupLocation"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="dropLocation">Drop up location</label>
                      <input
                        type="text"
                        className="form-control"
                        id="dropLocation"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact">Contact</label>
                      <input
                        type="text"
                        className="form-control"
                        id="contact"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="shippingDate">Shipping Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="shippingDate"
                      />
                    </div>
                    <div className="button-container">
                      <button type="submit" className="btn">
                        Get estimate
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "international" ? "show active" : ""
                  }`}
                  id="international"
                  role="tabpanel"
                  aria-labelledby="international-tab"
                >
                  <form>
                    <div className="form-group">
                      <label htmlFor="pickupLocation">Pick up location</label>
                      <input
                        type="text"
                        className="form-control"
                        id="pickupLocation"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="dropLocation">Drop up location</label>
                      <input
                        type="text"
                        className="form-control"
                        id="dropLocation"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact">Contact</label>
                      <input
                        type="text"
                        className="form-control"
                        id="contact"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="shippingDate">Shipping Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="shippingDate"
                      />
                    </div>
                    <div className="button-container">
                      <button type="submit" className="btn">
                        Get estimate
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
