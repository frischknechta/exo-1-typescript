import { useRef } from "react";

type Contact = {
  name: string;
  email: string;
};

type Props = {
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
};

export const RegistrationForm = ({ setContacts }: Props): JSX.Element => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (nameRef.current !== null && emailRef.current !== null) {
      setContacts((prev) => {
        const prevCopy = [...prev];
        prevCopy.push({
          name: nameRef.current.value,
          email: emailRef.current.value,
        });
        return prevCopy;
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        ref={nameRef}
        required
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        ref={emailRef}
        required
      />
      <button>ADD</button>
    </form>
  );
};
