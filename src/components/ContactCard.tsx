type Contact = {
  name: string;
  email: string;
};

type Props = {
  contact: {
    name: string;
    email: string;
  };
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
};

export const ContactCard = ({ contact, setContacts }: Props): JSX.Element => {
  return (
    <div>
      <div>{contact.name}</div>
      <div>{contact.email}</div>
      <button
        onClick={() => {
          setContacts((prev) => prev.filter((elem) => elem.name !== elem.name));
        }}
      >
        Delete
      </button>
    </div>
  );
};
