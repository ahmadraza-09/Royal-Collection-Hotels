import React from "react";
import "../css/list-property-form.css";

const ListPropertyForm = ({ onClose }) => {
  return (
    <div className="list-property-form-section">
      <form
        action="https://api.web3forms.com/submit"
        // enctype="multipart/form-data"
        method="POST"
      >
        <div className="hide-modal" onClick={onClose}>
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />
        {/* Hidden Inputs */}
        <input
          type="hidden"
          name="subject"
          value="Property Listing Query From Royal Collection Hotels"
        />
        <input
          type="hidden"
          name="from_name"
          value="Property Listing Query From Royal Collection Hotels"
        />
        <input
          type="hidden"
          name="access_key"
          value="ac18f110-8548-4859-aa68-b7b13bdbd1b2"
        ></input>

        <div className="form-header">
          <h2>LISTING PROPERTY FORM</h2>
          <p>
            If you would like to list your property with us then, please
            complete and submit this listing property form
          </p>
        </div>
        <br />
        <div className="form-fullname ">
          <label htmlFor="">Business Name</label>
          <div className="fullname-inputs input-flex">
            <div className="business-name">
              <label htmlFor=""></label>
              <input
                type="text"
                placeholder="ex: Royal Collection Hotels"
                name="Business Name"
                required
              />
              <label htmlFor="">Business Name</label>
            </div>
          </div>
        </div>
        <br />
        <div className="form-fullname ">
          <label htmlFor="">Contact Name</label>
          <div className="fullname-inputs input-flex">
            <div className="business-name">
              <label htmlFor=""></label>
              <input
                type="text"
                placeholder="ex: Amit Kumar"
                name="Contact Name"
                required
              />
              <label htmlFor="">ex: Amit Kumar</label>
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
                placeholder="ex: amit@gmail.com"
                name="Email"
                required
              />
              <label htmlFor="">ex: amit@gmail.com</label>
            </div>
            <div className="lastname input-column">
              <label htmlFor="">Contact Number</label>
              <input
                type="text"
                placeholder="ex: 9971834101"
                pattern="[0-9]{10}"
                name="Contact Number"
                required
              />
              <label htmlFor="">Please enter a valid phone number.</label>
            </div>
          </div>
        </div>
        <br />
        <div className="form-fullname ">
          <label htmlFor="">Business Address</label>
          <div className="fullname-inputs input-flex">
            <div className="business-name">
              <label htmlFor=""></label>
              <input
                type="text"
                placeholder="ex: COMMERCIAL TOWER-2 Block-B Greenwood City, Sector 45"
                name="Business Address"
                required
              />
              <label htmlFor="">
                ex: COMMERCIAL TOWER-2 Block-B Greenwood City, Sector 45
              </label>
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
                placeholder="ex: Gurugram"
                required
                name="City"
              />
              <label htmlFor="">
                ex: Noida, Faridabad, Gurugram, Delhi etc
              </label>
            </div>
            <div className="lastname input-column">
              <label htmlFor="">State</label>
              <input
                type="text"
                placeholder="ex: Haryana"
                name="State"
                required
              />
              <label htmlFor="">ex: New Delhi, Uttar Pradesh, Haryana</label>
            </div>
          </div>
        </div>
        <br />
        <div className="form-fullname ">
          <div className="fullname-inputs input-flex">
            <div className="firstname input-column">
              <label htmlFor="">Pin Code</label>
              <input
                type="number"
                placeholder="ex: 122003"
                required
                name="Pin Code"
                // pattern="[0-9]{6}"
              />
              <label htmlFor="">ex: 122003</label>
            </div>
            <div className="lastname input-column">
              <label htmlFor="">Number of Rooms</label>
              <input
                type="number"
                placeholder="ex: Haryana"
                name="Numbers Of Rooms"
                required
              />
              <label htmlFor="">ex: 50, 100, 150 etc</label>
            </div>
          </div>
        </div>
        <br />
        <div className="input-column form-textarea">
          <label htmlFor="">Additional Notes</label>
          <textarea
            name="Message"
            id=""
            rows={5}
            placeholder="Enter your message !"
          ></textarea>
        </div>
        <br />
        {/* <div className="input-column form-textarea form-upload">
              <label htmlFor="">Upload CV (PDF only)</label>
              <input
                type="file"
                id="upload-cv"
                accept="application/pdf"
                name="attachment"
                hidden
                onChange={handleFileChange}
                required
              />
              <label htmlFor="upload-cv" className="upload-label">
                <i className="fa-solid fa-cloud-arrow-up"></i>
                <h1>Browse Files</h1>
              </label>

              {selectedFile && (
                <div className="file-preview">
                  <div className="file-info">
                    <i className="fa-solid fa-file-pdf"></i>&nbsp;
                    <span>{selectedFile.name}</span> &nbsp;
                    <span>
                      {(selectedFile.size / (1024 * 1024)).toFixed(1)}MB
                    </span>
                  </div>
                  <button
                    onClick={handleRemoveFile}
                    className="remove-file-button"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              )}
            </div> */}
        <div className="form-footer">
          <button type="submit">Submit Form</button>
        </div>
      </form>
    </div>
  );
};

export default ListPropertyForm;
