import { useState } from "react";
import { useDispatch } from "react-redux";
import { Filter } from "../../redux/Phonebook/phonebook-actions";

export default function FilterContacts() {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState("");
    const onFilterChange = (e) => {
        setFilter(e.target.value);
        dispatch(Filter(e.target.value));
    };

    return (
        <div c>
            Find contacts by name:
            <input
                type="text"
                name="filter"
                value={filter}
                onChange={onFilterChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            />
        </div>
    );
}
