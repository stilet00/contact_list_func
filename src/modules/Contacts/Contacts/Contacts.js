import "./Contacts.css";
import ContactList from "../ContactList/ContactList";
import Form from "../Form/Form";
import { useData } from "../../../common/hooks";
import React, { useCallback, useState } from "react";
import { CONTACTS_URL } from "../../../constants/constants";

export default function Contacts(props) {
  const [editedData, setEditedData] = useState(null);
  const {
    data,
    deleteData,
    cancelEditing,
    saveData,
    saveToggleState,
    formShown,
    setFormShown,
  } = useData(CONTACTS_URL);
  let editPressed = useCallback(
    (data) => {
      setEditedData(data);
      setFormShown(!formShown);
    },
    [formShown, setFormShown]
  );
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
        savePressed={(contact) => {
          saveData(contact);
          setEditedData(null);
        }}
        cancelPressed={() => {
          cancelEditing();
          setEditedData(null);
        }}
      />
    );
  }

  return <div className={"contacts-container"}>{page}</div>;
}
