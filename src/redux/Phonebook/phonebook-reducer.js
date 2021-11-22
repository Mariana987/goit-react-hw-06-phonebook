import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, Filter } from "./phonebook-actions";

export const contactsList = createReducer([], {
    [addContact]: (state, { payload }) => {
        if (state.some(({ name }) => name === payload.name)) {
            alert(`Sorry, contact is already in your contacts list`);
            return state;
        }
        return [...state, payload];
    },
    [deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

export const contactsFilter = createReducer("", {
    [Filter]: (_, { payload }) => payload,
});






// import { combineReducers } from "redux";
// import types from "./phonebook-types";

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       if (state.some(({ name }) => name === payload.name)) {
//         alert(`Sorry, contact is already in your contacts list`);
//         return state;
//       }
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };
// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return (state = payload.target.value);
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   contacts,
//   filter,
// });










