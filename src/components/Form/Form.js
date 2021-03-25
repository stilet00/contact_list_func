import './Form.css'
import { useState } from 'react';


function Form({savePressed, givenContact, cancelPressed}) {
    const [contact, setContact] = useState(givenContact || {name: '', surname: '', phone: ''})
    const [validFields, setValidFields] = useState(true)

    function saveCont(e) {
        if (checkFields()) {
            e.preventDefault()
            savePressed(contact)
        } else {
            e.preventDefault()

        }

    }
    function onInputChange(e) {
        setContact({...contact, [e.target.name]: e.target.value.trim()})
        checkFields()

    }
    function checkFields() {
        return contact.name && contact.surname && contact.phone ? setValidFields(false) : setValidFields(true)
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
                    disabled={validFields}

            >save</button>
            <button type={"button"}
                    onClick={cancelPressed}

            >cancel</button>
        </form>
    );
}

export default Form;