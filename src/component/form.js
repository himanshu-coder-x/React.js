import { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] =
        useState({
            name: "",
            email: "",
            message: ""
        });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted Success fully ")
    };
    return (
        
             <>
            <div className="">
                <h1>Contact Us</h1>
                <p>LET'S CONNECT: WE'RE HERE TO HELP,AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO  CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,EMAIL, OR SOCIAL MEDIA.</p>
                <div>
                    <button >VIA SUPPORT</button>
                    <button>VIA CALL</button>
                    <h2>ViA EMAIL FORM</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        <label>Message:</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                        />
                        <button type="submit">Submit</button>
                    </form>

                </div>
                <div>
                    <img src=""></img>
                </div>
                </div></>

                )
            
            };
            
export default ContactUs;