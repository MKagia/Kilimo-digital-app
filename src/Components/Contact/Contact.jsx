import React from 'react'
import './Contact.css'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "99f7555b-fce8-441f-a30b-28aedfa675b5");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <div className='contact'>
        <div className="contact-col"></div>
        <h3>Send us a message</h3>
        <p>
        Feel free to reach out to us. Your feedback, questions, or suggestions are important to us as we strive to better serve farmers and our community as a whole.
        We value every message and are always ready to listen.
        Our team will get back to you as soon as possible.
        Let’s grow together — one message at a time!
        </p>

        <ul>
            <li>briankagia24@gmail.com</li>
            <li>+254798827801</li>
            <li>Kahawa Downs, Kahawa Wendani <br/>
            Nairobi, Kenya
            </li>
        </ul>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>
                    Your Name
                </label>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder= 'Enter Phone No.' required></input>
                <label>Write Your Message here</label>
                <textarea name='message' rows='6' placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn btn-light'> Submit </button>
            </form>
            <span>{result}</span>
        </div>


    </div>
  )
}

export default Contact;