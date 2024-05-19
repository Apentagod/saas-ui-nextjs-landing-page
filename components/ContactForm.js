import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xbjnerjq");
  if (state.succeeded) {
      return <p>Köszönjük, hogy üzentél!</p>;
  }
  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '5px' }}>
      <label htmlFor="email" style={{ color: '#333', fontSize: '14px' }}>
        Email-címed
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px', fontSize: '16px', width: '100%', marginBottom: '15px' }}
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message" style={{ color: '#333', fontSize: '14px' }}>
        Dalok preferenciái | Csomag neve  (Saját vagy Generált dalszöveg(ek)? | Milyen stílus és téma? | Egyéb kívánságok?)
      </label>
      <textarea
        id="message"
        name="message"
        style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px', fontSize: '16px', width: '100%', marginBottom: '15px' }}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} style={{ backgroundColor: '#007BFF', color: '#fff', padding: '10px 20px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
        Küldés
      </button>
    </form>
  );
}

export default ContactForm;
