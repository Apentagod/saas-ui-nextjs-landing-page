const ContactForm = () => (
  <form action="https://formspree.io/f/xwkgzayq" method="POST">
    <label>
      Your email:
      <input type="email" name="_replyto" required />
    </label>
    <label>
      Your message:
      <textarea name="message" required></textarea>
    </label>
    <button type="submit">Send</button>
  </form>
);

export default ContactForm;