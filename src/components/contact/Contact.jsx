import style from "./contactStyle.module.scss";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ searchContact, handleClickDelete  }) => {
  const { id, name, number } = searchContact;
  return (
    <li>
    <div>
        <p className={style.nameLi}>
          <FaUser className={style.userIcon}/>    
          {name}
        </p>
        <p>
        <a className={style.tel} href={`tel:${number}`}>
          <FaPhoneAlt/>
          {number}
          </a>
        </p>
        <button 
        type="button"
        onClick={() => handleClickDelete (id)}>Delete</button>
    </div>
    </li>
  );
};

export default Contact;
