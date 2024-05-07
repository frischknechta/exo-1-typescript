import { useRef } from "react";
import { Contact } from "../types/types";

type Props = {
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
};

export const RegistrationForm = ({ setContacts }: Props): JSX.Element => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;

    if (name && email) {
      setContacts((prev) => {
        const prevCopy = [...prev];

        if (prevCopy.find((elem) => elem.name === name)) {
          alert("User already registered!");
          return prevCopy;
        } else {
          prevCopy.push({
            name: name,
            email: email,
          });
          return prevCopy;
        }
      });
      nameRef.current.value = "";
      emailRef.current.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-3 overflow-hidden rounded-xl bg-gray-300"
    >
      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        ref={nameRef}
        required
        className="bg-inherit p-3 outline-none"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        ref={emailRef}
        required
        className="bg-inherit p-3 outline-none"
      />
      <button className="rounded-xl bg-indigo-600 p-3 font-bold text-white">
        ADD
      </button>
    </form>
  );
};
