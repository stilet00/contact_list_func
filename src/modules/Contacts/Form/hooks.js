import { useState } from "react";


export function useForm(givenContact, savePressed) {
    const [contact, setContact] = useState(givenContact || {name: '', surname: '', phone: ''})

    function saveCont(e) {
        if (checkFields()) {
            e.preventDefault()
            savePressed(contact)
        } else {
            e.preventDefault()
            alert("Something is wrong!")

        }

    }
    function onInputChange(e) {
        setContact({...contact, [e.target.name]: e.target.value.trim()})


    }
    function checkFields() {
        return contact.name && contact.surname && contact.phone ? true : false
    }


    return {
        contact,
        setContact,
        saveCont,
        onInputChange,
        checkFields
    }
}