import { useEffect, useState, useCallback } from "react";
import {
  addOne,
  deleteOne,
  editOne,
  getContacts,
} from "../../../services/asyncContacts";

export function useContacts() {
  const [contacts, setContacts] = useState([]);
  const [editedContact, setEditedContact] = useState(null);
  const [formShown, setFormShown] = useState(false);
  useEffect(() => {
    getContacts().then((contacts) => setContacts(contacts.data));
  }, []);

  let deleteContact = useCallback(
    (contactId) => {
      deleteOne(contactId).then((res) => {
        setContacts(
          contacts.filter((item) => item.id !== res.data.id).reverse()
        );
      });
    },
    [contacts]
  );
  let editPressed = useCallback(
    (data) => {
      setEditedContact(data);
      setFormShown(!formShown);
    },
    [formShown]
  );

  function saveContact(contact) {
    if (!contact.id) {
      addOne(contact).then((res) => {
        setFormShown(!formShown);
        setContacts([...contacts, res.data]);
      });
    } else {
      editOne(contact).then((res) => {
        setEditedContact(null);
        setFormShown(!formShown);
        setContacts(
          contacts.map((item) => (item.id === res.data.id ? res.data : item))
        );
      });
    }
  }
  function cancelEditing() {
    setFormShown(!formShown);
    setEditedContact(null);
  }
  function saveToggleState() {
    setFormShown(!formShown);
    setFormShown(!formShown);
  }
  return {
    editedContact,
    setEditedContact,
    contacts,
    setContacts,
    deleteContact,
    cancelEditing,
    saveContact,
    editPressed,
    saveToggleState,
    formShown,
    setFormShown,
  };
}
