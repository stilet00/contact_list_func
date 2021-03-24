import './Form.css'
import {useEffect, useState} from 'react';
import {getContacts} from "../../services/asyncRequests";

function Form({savePressed, givenContact}) {
    const [contact, setContact] = useState({name: '', surname: '', phone: ''})
    useState({
        if (givenContact) {
            setContact(givenContact)
            console.log(contact)
        }
    }, [])
    function saveCont(e) {
        e.preventDefault()
        savePressed(contact)
    }
    function onInputChange(e) {
        setContact({...contact, [e.target.name]: e.target.value})
    }
    return (
        <form action=""
        onSubmit={saveCont}>
            <input
                type="text"
                value={contact.name}
                name={'name'}
                onChange={onInputChange}
            />
            <input
                type="text"
                value={contact.surname}
                name={'surname'}
                onChange={onInputChange}
            />
            <input
                type="phone"
                value={contact.phone}
                name={'phone'}
                onChange={onInputChange}
            />
            <button type={"submit"}>save</button>
        </form>
    );
}

export default Form;