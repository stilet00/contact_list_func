import './Contacts.css'
import ContactList from "../ContactList/ContactList";
import Form from "../Form/Form";
import {useContacts} from "./hooks";
import React from "react";
import { Link } from "react-router-dom";



export default function Contacts(props) {
    const {
        contacts,
        editedContact,
        deleteContact,
        cancelEditing,
        editPressed,
        saveContact,
        saveToggleState,
        formShown
    } = useContacts()
    let page
    if (!formShown) {
        page =
            <ContactList
            contacts={contacts}
            deleteOne={deleteContact}
            onEdit={editPressed}
            onAdd={saveToggleState}
        />
    } else {
        page = <Form
            givenContact={editedContact}
            savePressed={saveContact}
            cancelPressed={cancelEditing}
        />
    }
    return (
                <div className={'container'}>
                        {page}
                    <Link to="/">Back</Link>
                </div>
    );
}

