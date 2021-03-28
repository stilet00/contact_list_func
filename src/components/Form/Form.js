import './Form.css'
import { useForm } from "./hooks";


function Form({savePressed, givenContact, cancelPressed}) {
    const {
        contact,
        saveCont,
        onInputChange
    } = useForm(givenContact, savePressed)


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