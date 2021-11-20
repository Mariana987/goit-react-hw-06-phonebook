import React from "react";
import ContactItem from "../Contact";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/Phonebook/selectors";
// import { connect } from "react-redux";

export default function ContactList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    return (
        <ul className={styles.contacts__list}>
            {getFilteredContacts().map(({ name, number, id }) => (
                <ContactItem key={id} name={name} number={number} id={id} />
            ))}
        </ul>
    );
}

// const mapStateToProps = (state) => ({
//   contacts: state.contactsList,
//   filter: state.contactsFilter,
// });

// export default connect(mapStateToProps, null)(ContactList);
















// import PropTypes from 'prop-types';
// import Contact from '../Contact';

// export default function ContactList({ getVisibleContacts, deleteContact }) {
//     return (
//         <ul>
//             {getVisibleContacts().map(contact => (
//                 <Contact key={contact.id}
//                     contact={contact}
//                     deleteContact={deleteContact} />
//             ))}
//         </ul>
//     );
// }

// ContactList.propTypes = {
//     getVisibleContacts: PropTypes.func,
//     deleteContact: PropTypes.func,
// };