import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'


class Contact extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}
  render() {
    return (
      <div className="Contact">
        <h1  id="contactHeader" className="title is-2">Contact Form</h1>
        <form action="https://formspree.io/dvsgweb@gmail.com" method="POST">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input is-black" type="text" placeholder="your name" type="text" name="name"></input><br></br>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input is-black" placeholder="your email" type="email" name="_replyto"></input><br></br>
            </div>
          </div>
          <label className="label">Subject</label>
          <div className="select is-black">
            <select name="_subject">
              <option>Want services</option>
              <option>Networking</option>
              <option>Report a bug</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea is-black" placeholder="your message" name="message"></textarea><br></br>
            </div>
          </div>
          <div id="contactForm">
            <input className="button is-black is-medium" type="submit" value="Send"></input>
          </div>
          <input type="hidden" name="_next" value="//localhost:3000/contact" />
        </form>
      </div>
    );
  }
}

export default Contact;
