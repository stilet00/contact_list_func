import "./Contacts.css";
import ContactList from "../ContactList/ContactList";
import Form from "../Form/Form";
import { useData } from "../../../common/hooks";
import React from "react";
import { CONTACTS_URL } from "../../../constants/constants";

export default function Contacts(props) {
  const {
    editedData,
    data,
    deleteData,
    cancelEditing,
    saveContact,
    editPressed,
    saveToggleState,
    formShown,
  } = useData(CONTACTS_URL);
  let page;
  if (!formShown) {
    page = (
      <ContactList
        contacts={data}
        deleteOne={deleteData}
        onEdit={editPressed}
        onAdd={saveToggleState}
      />
    );
  } else {
    page = (
      <Form
        givenContact={editedData}
        savePressed={saveContact}
        cancelPressed={cancelEditing}
      />
    );
  }
  return <div className={"contacts-container"}>{page}</div>;
}
