import { useState, useEffect } from 'react';
import {addOne, deleteOne, editOne, getContacts} from "../../services/asyncRequests";
import ContactList from "../ContactList/ContactList";
import Form from "../Form/Form";
import './Contacts.css'

export default function Contacts(props) {
    const [contacts, setContacts] = useState([])
    const [formShown, setFormShown] = useState(false)
    const [editedContact, setEditedContact] = useState(null)
    useEffect(() => {
        getContacts().then(contacts => setContacts(contacts.data))
    }, [])
    // useEffect(() => {
    //     setFormShown(localStorage.setItem('windowsState', formShown))
    // }, [formShown])

    function saveToggleState() {
        setFormShown(!formShown)
        setFormShown(!formShown)
    }
    function deleteContact(e) {
        deleteOne(e.target.parentNode.parentNode.id).then(res => {
            setContacts(contacts.filter(item => item.id !== res.data.id).reverse())
        })
    }
    function editePressed(contact) {
        // setEditedContact(contact)
        console.log(contact)
        setFormShown(!formShown)
    }
    function saveContact(contact) {
        if (!contact.id) {
            addOne(contact).then(res => {
                setFormShown(!formShown)
                setContacts([...contacts, res.data])
            })
        } else {
            editOne(contact).then(res => {
                setFormShown(!formShown)
                setContacts(contacts.map(item => item.id === res.id ?  res :  item))
            })
        }

    }


    let page
    if (!formShown) {
        page = <ContactList
            contacts={contacts}
            deleteOne={deleteContact}
            onEdit={editePressed}
        />
    } else {
        page = <Form
            givenContact={editedContact}
            savePressed={saveContact}
        />
    }
    return (
        <div className={'container'}>

            {page}
            <button
            onClick={saveToggleState}
            >Add new contact</button>
        </div>
    );
}
