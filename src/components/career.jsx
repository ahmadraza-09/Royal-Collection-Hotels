import React, { useState } from "react";
import "../css/career.css";
import Team from "../assets/team.jpg";

const Career = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  // Handle file removal
  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="career-section">
      <div className="career-banner">
        <h2>Career</h2>
      </div>
      <div className="career-content">
        <h2>Join Our Team</h2>
        <div className="career-team-content">
          <img src={Team} alt="" className="swipe-left" />
          <p className="swipe-right">
            <span>Royal Collection Hotels and Resorts</span>, we are a leading
            Hotel Branding Company dedicated to providing top-notch branding
            solutions that boost sales, profitability, and visibility for our
            hotel partners. Our commitment to excellence in the tourism industry
            ensures that we deliver 100% guest satisfaction and value for money
            services. We believe in fostering an innovative and dynamic work
            environment where every team member plays a vital role in our
            success. If you're passionate about the tourism industry and ready
            to make an impact, explore exciting career opportunities with us.
            Why Join Us? Be part of a fast-growing, professional hotel branding
            company. Work with a team of specialized experts in online
            marketing, sales, and branding. Collaborate with leading hotels
            across the country, enhancing their visibility and profitability.
            Enjoy a workplace that promotes creativity, learning, and
            professional growth. We are always looking for talented, driven, and
            innovative individuals to join our team. If you're ready to
            contribute to the future of hotel branding and make a difference in
            the tourism industry, apply now! Current Openings: Sales & Marketing
            Executive Digital Marketing Specialist Hotel Branding Coordinator
            Inventory & Channel Manager Guest Relations Officer How to Apply: If
            you are interested in any of the open positions, please send your
            resume and a brief cover letter to{" "}
            <a href="mailto:sales@royalcollectionhotels.com">
              sales@royalcollectionhotels.com
            </a>{" "}
          </p>
        </div>
        <div className="career-form">
          <form
            action="https://api.web3forms.com/submit"
            // enctype="multipart/form-data"
            method="POST"
          >
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />
            {/* Hidden Inputs */}
            <input
              type="hidden"
              name="subject"
              value="Job Query From Royal Collection Hotels"
            />
            <input
              type="hidden"
              name="from_name"
              value="Job Query From Royal Collection Hotels"
            />
            <input
              type="hidden"
              name="access_key"
              value="ac18f110-8548-4859-aa68-b7b13bdbd1b2"
            ></input>

            <div className="form-header">
              <h2>Hiring Inquiry Form</h2>
              <p>
                If you would like to find out more about the positions
                available, please complete and submit this inquiry form
              </p>
            </div>
            <br />
            <div className="form-fullname ">
              <label htmlFor="">Full Name</label>
              <div className="fullname-inputs input-flex">
                <div className="firstname input-column">
                  <label htmlFor=""></label>
                  <input
                    type="text"
                    placeholder="ex: Rahul"
                    name="firstname"
                    required
                  />
                  <label htmlFor="">First Name</label>
                </div>
                <div className="lastname input-column">
                  <label htmlFor=""></label>
                  <input
                    type="text"
                    placeholder="ex: Kumar"
                    name="lastname"
                    required
                  />
                  <label htmlFor="">Last Name</label>
                </div>
              </div>
            </div>
            <br />
            <div className="form-fullname ">
              <div className="fullname-inputs input-flex">
                <div className="firstname input-column">
                  <label htmlFor="">E-mail</label>
                  <input
                    type="email"
                    placeholder="ex: rahul123@gmail.com"
                    name="email"
                    required
                  />
                  <label htmlFor="">example@example.com</label>
                </div>
                <div className="lastname input-column">
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="text"
                    placeholder="ex: 9971834101"
                    pattern="[0-9]{10}"
                    name="Phone Number"
                    required
                  />
                  <label htmlFor="">Please enter a valid phone number.</label>
                </div>
              </div>
            </div>
            <br />
            <div className="form-fullname">
              <label htmlFor="">Please select your job role</label>
              <div className="input-checkbox">
                <div className="input-checkbox-flex">
                  <input type="checkbox" name="sales" value="Yes" id="" />
                  <label htmlFor="">Sales </label>
                </div>
                <div className="input-checkbox-flex">
                  <input
                    type="checkbox"
                    name="digital-marketing"
                    id=""
                    value="Yes"
                  />
                  <label htmlFor="">Digital Marketing</label>
                </div>
              </div>
              <div className="input-checkbox">
                <div className="input-checkbox-flex">
                  <input
                    type="checkbox"
                    name="guest-relation-officer"
                    value="Yes"
                    id=""
                  />
                  <label htmlFor="">Guest Relations Officer</label>
                </div>
                <div className="input-checkbox-flex">
                  <input
                    type="checkbox"
                    name="Website Developer"
                    id=""
                    value="Yes"
                  />
                  <label htmlFor="">Website Developer</label>
                </div>
              </div>
              <div className="input-checkbox">
                <div className="input-checkbox-flex">
                  <input type="checkbox" value="Yes" name="acountant" id="" />
                  <label htmlFor="">Acountant</label>
                </div>
                <div className="input-checkbox-flex">
                  <input
                    type="checkbox"
                    value="Another Field"
                    name="others"
                    id=""
                  />
                  <label htmlFor="">Others</label>
                </div>
              </div>
            </div>
            <br />
            <div className="form-fullname">
              <label htmlFor="">Estimated Start Date</label>
              <div className="input-select">
                <div className="input-select-column">
                  <select name="month" id="" required>
                    <option value="">Please select a month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <label htmlFor="">Month</label>
                </div>
                <div className="input-select-column ">
                  <select name="date" id="" required>
                    <option value="">Please select a day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  <label htmlFor="">Day</label>
                </div>
                <div className="input-select-column">
                  <select name="year" id="" required>
                    <option value="">Please select a year</option>
                    <option value={currentYear}>{currentYear}</option>
                    <option value={nextYear}>{nextYear}</option>
                  </select>
                  <label htmlFor="">Year</label>
                </div>
              </div>
            </div>
            <br />
            <div className="form-fullname ">
              <div className="fullname-inputs input-flex">
                <div className="firstname input-column">
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    placeholder="ex: Uttam Nagar"
                    required
                    name="City"
                  />
                  <label htmlFor="">
                    ex: Noida, Faridabad, Gurgaon, delhi etc
                  </label>
                </div>
                <div className="lastname input-column">
                  <label htmlFor="">State</label>
                  <input
                    type="text"
                    placeholder="ex: New Delhi"
                    name="State"
                    required
                  />
                  <label htmlFor="">
                    ex: New Delhi, Uttar Pradesh, Haryana
                  </label>
                </div>
              </div>
            </div>
            <br />
            <div className="input-column form-textarea">
              <label htmlFor="">Additional Notes</label>
              <textarea
                name="message"
                id=""
                rows={5}
                placeholder="Enter your message !"
              ></textarea>
            </div>
            <br />
            <div className="form-footer">
              <button type="submit">Submit Form</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
