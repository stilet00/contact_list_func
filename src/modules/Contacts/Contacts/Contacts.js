import "./Contacts.css";
import ContactList from "../ContactList/ContactList";
import Form from "../Form/Form";
import { useData } from "../../../common/hooks";
import React from "react";
import { CONTACTS_URL } from "../../../constants/constants";
import { useEditor, useTogglePages } from "./hooks";

export default function Contacts(props) {
  const {
    formShown,
    setFormShown,
    saveToggleState,
    hideForm,
  } = useTogglePages();
  const { editPressed, editedData, setEditedData } = useEditor();
  const { data, deleteData, saveData, loader } = useData(CONTACTS_URL);

  let page;
  if (!formShown) {
    page = (
      <ContactList
        contacts={data}
        deleteOne={deleteData}
        loader={loader}
        onEdit={(data) => {
          editPressed(data);
          setFormShown(!formShown);
        }}
        onAdd={saveToggleState}
      />
    );
  } else {
    page = (
      <Form
        givenContact={editedData}
        savePressed={(contact) => {
          setFormShown(!formShown);
          saveData(contact);
          setEditedData(null);
        }}
        cancelPressed={() => {
          hideForm();
          setEditedData(null);
        }}
      />
    );
  }

  return <div className={"contacts-container"}>{page}</div>;
}
