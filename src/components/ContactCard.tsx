import { Contact } from "../types/types";

type Props = {
  contact: Contact;
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  index: number;
};

export const ContactCard = ({
  contact,
  setContacts,
  index,
}: Props): JSX.Element => {
  return (
    <div
      className={
        index % 2 === 0
          ? "group flex justify-between rounded-lg bg-slate-200 p-3"
          : "group flex justify-between rounded-lg bg-slate-400 p-3"
      }
    >
      <div>
        <div className="text-xl">{contact.name}</div>
        <div className="text-slate-600">{contact.email}</div>
      </div>
      <button
        className="hidden group-hover:inline group-hover:rounded-xl group-hover:bg-red-500 group-hover:p-3 group-hover:font-bold group-hover:text-white "
        onClick={() => {
          setContacts((prev) =>
            prev.filter((elem) => elem.name !== contact.name),
          );
        }}
      >
        Delete
      </button>
    </div>
  );
};

// className="group flex justify-between rounded-lg bg-slate-200 p-3"
