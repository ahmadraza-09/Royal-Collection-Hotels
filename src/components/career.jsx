import React, { useState } from "react";
import "../css/career.css";
import Team from "../assets/team.webp";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "/thanks";
        } else {
          alert("There was an issue submitting the form. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("An error occurred while submitting the form.");
      });
  };

  return (
    <div className="career-section">
      <div className="career-banner">
        <h2>Career</h2>
      </div>
      <div className="career-content">
        <h2>Join Our Team</h2>
        <div className="career-team-content">
          <img
            src={Team}
            alt=""
            className="swipe"
            loading="lazy"
            fetchPriority="high"
          />
          <p className="swipe">
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
            <a
              href="mailto:sales@royalcollectionhotels.com"
              aria-label="mail us for job requirement"
            >
              sales@royalcollectionhotels.com
            </a>{" "}
          </p>
        </div>
        <div className="career-form">
          <form
            action="https://api.web3forms.com/submit"
            // enctype="multipart/form-data"
            method="POST"
            onSubmit={handleSubmit}
          >
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
              value="6f647945-dab4-4f7b-b35c-ab1a2cd84697"
            ></input>

            <div className="form-header">
              <h2>Hiring Form</h2>
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
            <div className="form-fullname ">
              <div className="fullname-inputs input-flex">
                <div className="firstname input-column">
                  <label htmlFor="">Experience</label>
                  <input
                    type="text"
                    placeholder="ex: 1 year 6 months"
                    name="experience"
                    required
                  />
                  <label htmlFor="">ex: 1 Year 6 Months</label>
                </div>
                <div className="lastname input-column">
                  <label htmlFor="">Skills</label>
                  <input
                    type="text"
                    placeholder="ex: Basic Computer, Excell, Sales & etc"
                    name="skills"
                    required
                  />
                  <label htmlFor="">
                    ex: Basic Computer, Excell, Sales & etc
                  </label>
                </div>
              </div>
            </div>
            <br />
            <div className="input-column form-textarea">
              <label htmlFor="">Qualification</label>
              <textarea
                name="qualification"
                rows={3}
                placeholder="ex: Bachelor’s Degree in Computer Science, 2019 - XYZ University; Certified Data Analyst, ABC Institute"
              ></textarea>
            </div>
            <br />
            <div className="form-fullname">
              <label htmlFor="">Please select your job role</label>
              <div className="input-checkbox">
                <div className="input-checkbox-flex">
                  <input type="checkbox" name="Accounts" value="Yes" id="" />
                  <label htmlFor="">Accounts</label>
                </div>
                <div className="input-checkbox-flex">
                  <input
                    type="checkbox"
                    name="Travel Operation"
                    id=""
                    value="Yes"
                  />
                  <label htmlFor="">Travel Operation</label>
                </div>
              </div>
              <div className="input-checkbox">
                <div className="input-checkbox-flex">
                  <input type="checkbox" name="Hotel Sales" value="Yes" id="" />
                  <label htmlFor="">Hotel Sales</label>
                </div>
                <div className="input-checkbox-flex">
                  <input
                    type="checkbox"
                    name="Hotel Operation"
                    id=""
                    value="Yes"
                  />
                  <label htmlFor="">Hotel Operation</label>
                </div>
              </div>
              <div className="input-checkbox">
                <div className="input-checkbox-flex">
                  <input type="checkbox" value="Yes" name="IT" id="" />
                  <label htmlFor="">IT</label>
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
              <label htmlFor="">Please select known languages</label>
              <div className="input-checkbox">
                <div className="input-checkbox-flex">
                  <input type="checkbox" name="hindi" value="Yes" id="" />
                  <label htmlFor="">Hindi</label>
                </div>
                <div className="input-checkbox-flex">
                  <input type="checkbox" name="english" id="" value="Yes" />
                  <label htmlFor="">English</label>
                </div>
              </div>
              <div className="input-checkbox">
                <div className="input-checkbox-flex">
                  <input type="checkbox" name="tamil" value="Yes" id="" />
                  <label htmlFor="">Tamil</label>
                </div>
                <div className="input-checkbox-flex">
                  <input type="checkbox" name="Bengali" id="" value="Yes" />
                  <label htmlFor="">Bengali</label>
                </div>
              </div>
              <div className="input-checkbox">
                <div className="input-checkbox-flex">
                  <input type="checkbox" value="Yes" name="marathi" id="" />
                  <label htmlFor="">Marathi</label>
                </div>
                <div className="input-checkbox-flex">
                  <input
                    type="checkbox"
                    value="Other Language"
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
              <label htmlFor="">Cover Letter</label>
              <textarea
                name="message"
                id=""
                rows={5}
                placeholder="Your cover letter"
              ></textarea>
            </div>
            <br />
            <div className="form-footer">
              <button type="submit" name="submit">
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
