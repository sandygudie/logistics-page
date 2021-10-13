import React, { useState } from "react";
import "./Booking.scss";
import { MdAirplanemodeActive } from "react-icons/md";
import { RiShipFill } from "react-icons/ri";
import { HiTruck } from "react-icons/hi";
import { FaUserGraduate } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";

function Booking() {
  const [toggle, setToggle] = useState(true);

  const triggerToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <i class="fas fa-arrow-left"></i>
      <div className="heading">
        <h3>New Booking</h3>
        <p>
          Fill in the information below to get a quote or create a new booking
        </p>
      </div>

      <div className="content">
        <h6>Select a service</h6>
        <div className="service">
          <div>
            <p> Air Freight</p>
            <MdAirplanemodeActive className="icon-airfreight iconstyles " />
          </div>
          <div>
            <p> Sea Freight</p>
            <RiShipFill className="icon-seafreight iconstyles" />
          </div>
          <div>
            <p>
              Inland
              <br /> (Truck & Barge)
            </p>
            <HiTruck className="icon-truck iconstyles" />
          </div>
          <div>
            <p>
              Custom <br /> Clearance
            </p>
            <FaUserGraduate className="icon-police iconstyles" />
          </div>
        </div>
      </div>

      <div className="content">
        <div>
          <RiErrorWarningLine className="warning" />
        </div>
        <div className="info-top">
          <div className="info-btn">
            <button>Import</button>
            <button>Export</button>
          </div>
          <div class="form-group position-relative">
            {/* <label for="email" class="sr-only">Email</label> */}
            <i class="fa fa-map-marker-alt  position-absolute"></i>

            <input
              class="form-control input-lg rounded-0"
              type="text"
              placeholder="From City or Port"
              required=""
            />
          </div>
          <div class="form-group position-relative">
            {/* <label for="email" class="sr-only">Email</label> */}
            <i class="fa fa-map-marker-alt  position-absolute"></i>

            <input
              class="form-control input-lg rounded-0"
              type="text"
              placeholder="To City or Port"
              required=""
            />
          </div>
        </div>

        <div className="info-bottom">
          <div class="form-group position-relative">
            <i class="fas fa-calendar position-absolute"></i>
            <input
              class="form-control input-lg rounded-0"
              type="date"
              placeholder="Ready Date"
              required=""
            />
          </div>
          <select>
            <option>incoterms</option>
          </select>
          <div className="cargo-value">Total cargo Value</div>
        </div>
      </div>

      <div className="content cargo">
        <div className="cargo-details">
          <h6 className="cargo-details-heading">Cargo Details</h6>

          <div className="package-details">
            <div className="package-size">
              <span
                onClick={() => triggerToggle()}
                className={toggle ? "active" : " "}
              >
                Total Dimensions
              </span>
              <span
                onClick={() => triggerToggle()}
                className={!toggle ? "active" : " "}
              >
                Package Details
              </span>
            </div>

            <div className="load">
              <div>
                <label for="input1">
                  <span class="h6 small bg-white text-muted pt-1 pl-1 pr-1 ml-3">
                    Total Volume
                  </span>
                </label>
                <div></div>
                <input type="text" class="form-control mt-n3" id="input1" />
                {/* <div class="input-group-append">
    <span class="input-group-text">.00</span>
  </div> */}
              </div>

              <div>
                <label for="input1">
                  <span class="h6 small bg-white text-muted pt-1 pl-1 pr-1 ml-3">
                    Total Weight
                  </span>
                </label>
                <input type="text" className="form-control mt-n3" id="input1" />
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch1"
            />
            <label class="custom-control-label" for="customSwitch1">
              <b>Dangerous Cargo</b>(ex. Chemicals, Battery)
            </label>
          </div>
        </div>
      </div>

      <div className="content">
        <h6 className="cargo-details-heading">Additional Services</h6>
        <div className="additional">
          <div className="others">
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch2"
              />
              <label class="custom-control-label" for="customSwitch2">
                <h6>Export Forwarding</h6>
                <p>We handle custom clearance and documentation. </p>
              </label>
            </div>

            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch4"
              />
              <label class="custom-control-label" for="customSwitch4">
                <h6>Cargo Insurance</h6>
                <p>
                  Protect your cargo from logistics risks upto it's full value
                </p>
              </label>
            </div>
          </div>

          <div className="others">
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch3"
              />
              <label class="custom-control-label" for="customSwitch3">
                <h6>Import Custom Clearance</h6>
                <p>We handle import customs and regulatory requirements.</p>
              </label>
            </div>
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch5"
              />
              <label class="custom-control-label" for="customSwitch5">
                <h6>Transport / Delivery</h6>
                <p>We deliver the cargo to your door steps from the port.</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
