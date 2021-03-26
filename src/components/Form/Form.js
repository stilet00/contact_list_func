import './Form.css'
import { useState } from 'react';


function Form({savePressed, givenContact, cancelPressed}) {
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
            <button type={"submit"}

            >save</button>
            <button type={"button"}
                    onClick={cancelPressed}

            >cancel</button>
        </form>
    );
}

export default Form;