import React from 'react';
import {AiFillGithub} from 'react-icons/ai';
import './Contact.css';

export default function Contact() {
  return(
    <section id="contact">
      <div className="contact-title">Let's talk</div>
      <div className="contact email">zop1234@hanmail.net</div>
      <a className="contact" href="https://github.com/TaeWooKim-SCH"><AiFillGithub size="50" /></a>
      <div className="contact-bottom">2023 Developer Taewoo</div>
      <div className="light"></div>
    </section>
  );
}