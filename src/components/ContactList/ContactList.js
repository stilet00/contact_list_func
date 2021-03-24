import React from 'react';
import SingleContact from "../SingleContact/SingleContact";

function ContactList({ contacts, deleteOne, onEdit }) {
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
            </tbody>

        </table>
    );
}

export default ContactList;