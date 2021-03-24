import React from 'react';

function SingleContact( { contact, deleteCont, onEdit }) {
    function editePressed() {
        onEdit(contact)
    }
    return (
        <tr id={ contact.id }>
            <td>{ contact.name }</td>
            <td>{ contact.surname }</td>
            <td>{ contact.phone }</td>
            <td><button
                onClick={ deleteCont }
            >DELETE</button></td>
            <td><button
                onClick={editePressed}

            >EDIT</button></td>
        </tr>
    );
}

export default SingleContact;