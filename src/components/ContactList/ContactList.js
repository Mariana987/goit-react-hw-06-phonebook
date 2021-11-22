import React from "react";
import ContactItem from "../Contact";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/Phonebook/selectors";

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
        <ul >
            {getFilteredContacts().map(({ name, number, id }) => (
                <ContactItem key={id} name={name} number={number} id={id} />
            ))}
        </ul>
    );
}





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