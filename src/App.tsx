import { useState } from "react";
import "./App.css";
import { RegistrationForm } from "./components/RegistrationForm";
import { ContactCard } from "./components/ContactCard";

type Contact = {
  name: string;
  email: string;
};

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <>
      <main>
        <div>
          <h1>Contacts</h1>
          {contacts.map((contact) => {
            return <ContactCard key={contact.name} contact={contact} />;
          })}
          <RegistrationForm setContacts={setContacts} />
        </div>
      </main>
    </>
  );
}

export default App;
