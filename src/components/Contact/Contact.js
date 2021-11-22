import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/Phonebook/phonebook-actions";
import PropTypes from "prop-types";
import s from "./Contact.module.css";

export default function ContactItem({ name, number, id }) {
    const dispatch = useDispatch();

    return (
        <li id={id} className={s.item}>
            <p >{name}: </p>
            <p > {number}</p>
            <button
                onClick={() => dispatch(deleteContact(id))}
                className={s.button} >
                Delete contact
            </button>
        </li>
    );
}

ContactItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
};



// import PropTypes from 'prop-types';
// import s from './Contact.module.css';

// export default function Contact({ contact, deleteContact }) {
//     return (
//         <li className={s.item}>
//             {contact.name}: {contact.number}{' '}
//             <button onClick={() => deleteContact(contact.id)} className={s.button}>Delete</button>
//         </li>
//     );
// }

// Contact.propTypes = {
//     concact: PropTypes.string,
//     deleteContact: PropTypes.func,
// };