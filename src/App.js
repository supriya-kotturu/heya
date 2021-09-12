import { useState, useCallback, Fragment } from 'react';

import { supabase } from './utils/supabase';

import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Button from './components/UI/Button';
import AuthLogin from './components/AuthLogin';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleShowForm = useCallback(() => {
    setShowContactForm((prevShowContactForm) => !prevShowContactForm);
  }, []);

  let formContent = (
    <div
      className={`main-container my-4 bg-blue-001 text-center rounded-xl ${
        showContactForm && 'hidden'
      }`}
    >
      <Button
        label="Add Contact"
        isPrimary={true}
        handleClick={handleShowForm}
      />
    </div>
  );

  if (showContactForm) {
    formContent = (
      <ContactForm
        handleShowForm={handleShowForm}
        showContactForm={showContactForm}
      />
    );
  }

  return (
    <Fragment>
      <div className="py-3">
        <div className="mx-auto text-center">
          <p className=" text-blue-002 font-extrabold text-2xl">Heyaa!</p>
          <span className="text-medium-01">Contacts. Made easy.</span>
        </div>
        {!supabase.auth.user() && <AuthLogin />}
        {formContent}
        <ContactsList />
        <div className="main-container"></div>
      </div>
    </Fragment>
  );
}

export default App;
