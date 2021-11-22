import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/Phonebook/phonebook-actions";
import s from "./Form.module.css";
import shortid from "shortid";

export default function ContactForm() {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [active] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                console.warn(`Field - ${name} is under constraction`);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const cont = {
            name: name,
            number: number,
            id: shortid.generate(),
        };
        dispatch(addContact(cont));
        resetForm();
    };

    const resetForm = () => {
        setName("");
        setNumber("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label >
                <p>Name:</p>
                <input
                    type="text"
                    id={shortid.generate()}
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                    onChange={handleChange}
                    placeholder="Rosie Simpson"
                />
            </label>

            <label >
                <p>Number:</p>
                <input
                    type="tel"
                    id={shortid.generate()}
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    required
                    onChange={handleChange}
                    placeholder="459-12-56"
                />
            </label>
            <button className={s.button} type="submit" disabled={active}>
                Add contact
            </button>
        </form>
    );
}


// import PropTypes from 'prop-types';
// import { Component } from 'react';
// import s from './Form.module.css';
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/Phonebook/phonebook-actions";

// class Form extends Component {
//     state = {
//         name: '',
//         number: '',
//     };

//     handleInputChange = event => {
//         const { name, value } = event.currentTarget;
//         this.setState({ [name]: value });
//     };

//     handleSubmite = event => {
//         event.preventDefault();
//         this.props.getFormData(this.state);
//         this.reset();
//     };

//     reset = () => {
//         this.setState({
//             name: '',
//             number: '',
//         });
//     };

//     render() {
//         const { name, number } = this.state;
//         const { handleInputChange, handleSubmite } = this;
//         return (
//             <>
//                 <form onSubmit={handleSubmite}>
//                     <label>
//                         <p>Name</p>
//                         <input
//                             type="text"
//                             value={name}
//                             name="name"
//                             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                             required
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <label>
//                         <p>Number</p>
//                         <input
//                             type="tel"
//                             value={number}
//                             name="number"
//                             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </label>
//                     <button type="submit" className={s.button}>
//                         Add contact
//                     </button>
//                 </form>
//             </>
//         );
//     }
// }

// export default Form;

// Form.propTypes = {
//     getFormData: PropTypes.func,
// };