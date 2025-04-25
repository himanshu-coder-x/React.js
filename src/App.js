import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';    
import SupportChatButton from './component/ContactSupportButton';

const ContactUs = () => {
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCallButtonClick = () => {
    alert('You can reach us at 1-800-123-4567, Monday to Friday, 9am to 5pm EST.');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const text = event.target.text.value;
    setFormData({ name, email, text });
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white text-black font-sans">
      <div className="container p-4">
        <h1 className="display-4 font-weight-bold mb-4">CONTACT US</h1>
        <p className="mb-6">
          LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
        </p>
        <div className="row">
          <div className="col-md-6 p-4">
            <div className="d-flex mb-4">
              <SupportChatButton />
              <button id="call-btn" className="btn btn-dark flex-fill" onClick={handleCallButtonClick}>
                <i className="fa fa-phone"></i> VIA CALL
              </button>
            </div>
            <div className="border p-4 mb-4">
              <button id="email-form-btn" className="btn btn-light w-100 mb-4">
                <i className="fa fa-envelope"></i> VIA EMAIL FORM
              </button>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="email">E-Mail</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="text">TEXT</label>
                  <textarea className="form-control" id="text" rows="4"></textarea>
                </div>
                <button id="submit-btn" type="submit" className="btn btn-dark w-100">SUBMIT</button>
              </form>
            </div>
          </div>
          <div className="col-md-6 p-4 d-flex align-items-center justify-content-center">
            <div className="text-center">
              <img
                src="https://storage.googleapis.com/a1aa/image/5WrOOoPpFCDhp-4CbhO12_wQMJtddCV-0hqor89DFyo.jpg"
                alt="Illustration of a customer service representative with a headset, a clock showing 24/7 service, and various service-related icons"
                className="img-fluid mb-4"
                width="300"
                height="300"
              />
              <h2 className="display-4 font-weight-bold">24/7 SERVICE</h2>
            </div>
          </div>
        </div>
        {isSubmitted && (
          <div className="mt-4">
            <h2>Form Data:</h2>
            <ul>
              <li><strong>Name:</strong> {formData.name}</li>
              <li><strong>Email:</strong> {formData.email}</li>
              <li><strong>Text:</strong> {formData.text}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;