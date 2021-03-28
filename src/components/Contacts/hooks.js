import {useEffect, useState} from "react";
import {addOne, deleteOne, editOne, getContacts} from "../../services/asyncRequests";


export function useContacts() {
    const [contacts, setContacts] = useState([])
    const [editedContact, setEditedContact] = useState(null)
    const [formShown, setFormShown] = useState(false)
    useEffect(() => {
        getContacts().then(contacts => setContacts(contacts.data))
    }, [])

    function deleteContact(e) {
        deleteOne(e.target.parentNode.parentNode.id).then(res => {
            setContacts(contacts.filter(item => item.id !== res.data.id).reverse())
        })
    }
    function editPressed(data) {
        setEditedContact(data)
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
                setEditedContact(null)
                setFormShown(!formShown)
                setContacts(contacts.map(item => item.id === res.data.id ?  res.data :  item))
            })
        }

    }
    function cancelEditing() {
        setFormShown(!formShown)
        setEditedContact(null)
    }
    function saveToggleState() {
        setFormShown(!formShown)
        setFormShown(!formShown)
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
        setFormShown
    }
}