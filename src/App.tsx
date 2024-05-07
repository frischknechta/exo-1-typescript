import { useState } from "react";
import "./App.css";
import { RegistrationForm } from "./components/RegistrationForm";
import { ContactCard } from "./components/ContactCard";
import { Contact } from "./types/types";

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <>
      <main className="flex h-screen w-screen items-center justify-center bg-gray-800">
        <div className="flex min-h-40 flex-col rounded-2xl bg-white px-3">
          <h1 className="my-5 text-center text-3xl font-bold text-indigo-600">
            Contacts
          </h1>
          <div className="flex flex-col gap-2">
            {contacts.map((contact, index) => {
              return (
                <ContactCard
                  key={index}
                  index={index}
                  contact={contact}
                  setContacts={setContacts}
                />
              );
            })}
          </div>
          <RegistrationForm setContacts={setContacts} />
        </div>
      </main>
    </>
  );
}

export default App;
