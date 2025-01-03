import s from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
const Contact = ({ name, number, deleteContacts, id }) => {
  return (
    <div className={s.ContactContainer}>
      <p className={s.userInfo}>
        <span className={s.userName}>
          <FaUser style={{ marginRight: "0.5rem" }} />
          {name}
        </span>

        <span className={s.userNumber}>
          <FaPhone
            style={{
              marginRight: "0.5rem",
              transform: "rotate(90deg)",
            }}
          />
          {number}
        </span>
      </p>
      <button className={s.contactBtn} onClick={() => deleteContacts(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
