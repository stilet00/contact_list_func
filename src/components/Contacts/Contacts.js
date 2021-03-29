import './Contacts.css'
import ContactList from "../ContactList/ContactList";
import Form from "../Form/Form";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useContacts} from "./hooks";
import React, {useContext} from "react";
import { themeContext } from "../../themes/theme-context";
import {IOSSwitch} from "../IOSSwitch/IOSSwitch";



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
                </div>
    );
}

