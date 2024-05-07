type Props = {
  contact: {
    name: string;
    email: string;
  };
};

export const ContactCard = ({ contact }: Props): JSX.Element => {
  return (
    <div>
      <div>{contact.name}</div>
      <div>{contact.email}</div>
      <button>Delete</button>
    </div>
  );
};
