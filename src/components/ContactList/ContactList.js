import React from 'react';
import SingleContact from "../SingleContact/SingleContact";

function ContactList({ contacts, deleteOne, onEdit, onAdd }) {
    return (
        <table>
            <tbody>
                {contacts.map((item) => {
                    return (
                        <SingleContact
                            deleteCont={deleteOne}
                            contact={item}
                            onEdit={onEdit}
                            key={item.id}
                        />
                    )
                })}
                <tr>
                    <td>
                        <button
                        onClick={onAdd}
                        >Add new contact
                        </button>
                    </td>
                </tr>
            </tbody>

        </table>
    );
}

export default ContactList;