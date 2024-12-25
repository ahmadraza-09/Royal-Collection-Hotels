import React from "react";
import "../css/contact-us.css";

const ContactUs = () => {
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
    <>
      <div className="contact-us-section">
        <div className="contact-us-up">
          <div className="contact-us-left">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="swipe-left"
              onSubmit={handleSubmit}
            >
              <h2>QUERY FORM</h2>
              <input
                type="hidden"
                name="subject"
                value="Royal Collection Hotels & Resorts"
              />
              <input
                type="hidden"
                name="from_name"
                value="Query Royal Collection Hotels"
              />
              <input
                type="hidden"
                name="access_key"
                value="cfcb3d81-370f-407a-a5d9-fd6f622fe78c"
              ></input>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <input
                type="text"
                name="mobilenumber"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                required
              />

              {/* Message Textarea */}
              <textarea name="message" placeholder="Enter your query here..." />

              {/* Submit Button */}
              <button type="submit" name="submit">
                Send Query
              </button>
            </form>
          </div>
          {/* Contact Info Section */}
          <div className="contact-us-right swipe">
            <div className="contact-header-box">
              <h2>Contact info</h2>
              <p>
                Have any Queries? Let us know. We will clear it for you at the
                best.
              </p>
            </div>
            {/* Office Info */}
            <div className="contact-box">
              <div className="contact-box-left">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-box-right">
                <h3>Office</h3>
                <p>
                  110,111, UNITECH COMMERCIAL TOWER, 2, Block B, Greenwood City,
                  Sector 45, Gurugram, Haryana 122003
                </p>
              </div>
            </div>
            {/* Email Info */}
            <div className="contact-box">
              <div className="contact-box-left">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-box-right">
                <h3>Email</h3>
                <a
                  href="mailto:booking@rchronline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="mail us for hotel booking"
                >
                  booking@rchronline.com
                </a>
              </div>
            </div>
            {/* Phone Info */}
            <div className="contact-box">
              <div className="contact-box-left">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-box-right">
                <h3>Phone</h3>
                <a
                  href="tel:+91 9971834101"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="call us for hotel booking"
                >
                  +91 9971834101
                </a>
                <a
                  href="tel:+91 9971834111"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="call us for hotel booking"
                >
                  +91 9971834111
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-down">
          <iframe
            className="gmap_iframe"
            width="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28018.454312342954!2d77.044506!3d28.620566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0564d7009d53%3A0xedfe81945fd865b4!2sRoyal%20Collection%20Hotels!5e0!3m2!1sen!2sin!4v1729160912865!5m2!1sen!2sin"
          ></iframe>
          <a href="https://connectionsgame.org/">Connections Game</a>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
