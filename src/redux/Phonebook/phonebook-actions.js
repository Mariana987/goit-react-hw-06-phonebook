// import types from "./phonebook-types";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/Add");
export const deleteContact = createAction("contacts/Delete");
export const Filter = createAction("contacts/Filter");

// export const addContact = (cont) => ({
//   type: types.ADD,
//   payload: cont,
// });

// export const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });
// export const Filter = (value) => ({
//   type: types.FILTER,
//   payload: value,
// });












// import types from "./phonebook-types";
// export const addContact = (cont) => ({
//     type: types.ADD,
//     payload: cont,
// });

// export const deleteContact = (contactId) => ({
//     type: types.DELETE,
//     payload: contactId,
// });
// export const changeFilter = (value) => ({
//     type: types.FILTER,
//     payload: value,
// });