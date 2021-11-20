import types from "./phonebook-types";
export const addContact = (cont) => ({
    type: types.ADD,
    payload: cont,
});

export const deleteContact = (contactId) => ({
    type: types.DELETE,
    payload: contactId,
});
export const changeFilter = (value) => ({
    type: types.FILTER,
    payload: value,
});