import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            deleteContacts={deleteContacts}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
