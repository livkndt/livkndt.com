import React from 'react';
import { useState } from 'react';

import * as styles from './contact-form.module.css';
import { Link } from 'gatsby';

const ContactForm = () => {
  const [formValid, setFormValid] = useState(false);

  const handleInput = event => {
    const form = event.target.form;
    setFormValid(form.checkValidity());
  };

  return (
    <>
      <p>
        <strong>Let's connect!</strong> If you're interested in working together, inviting me to
        speak at an event, or collaborating on a piece, I'd love to hear from you. I'm especially
        passionate about supporting women and underrepresented groups in tech, so if you're looking
        for mentorship, advice, or just a chat, please don't hesitate to reach out. Send me a
        message! Powered by{' '}
        <a href="https://getform.io" target="_blank">
          getform.io
        </a>
      </p>
      <form method="post" action="https://getform.io/f/anlqnxna" className={styles.formContainer}>
        <label className={styles.label}>
          Email<sup>*</sup>
          <input
            type="email"
            name="email"
            className={styles.input}
            required
            onInput={handleInput}
          />
        </label>
        <label className={styles.label}>
          Name<sup>*</sup>
          <input type="text" name="name" className={styles.input} required onInput={handleInput} />
        </label>
        <label className={styles.label}>
          Message<sup>*</sup>
          <textarea
            name="message"
            className={styles.input}
            required
            onInput={handleInput}
          ></textarea>
        </label>
        <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
        <button type="submit" className={styles.button} disabled={!formValid}>
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
