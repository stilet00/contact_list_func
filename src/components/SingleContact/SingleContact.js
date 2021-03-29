import React from 'react';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function SingleContact( { contact, deleteCont, onEdit }) {
    function editePressed() {
        onEdit(contact)
    }
    return (
        <TableRow id={ contact.id }>
            <TableCell>{ contact.name }</TableCell>
            <TableCell>{ contact.surname }</TableCell>
            <TableCell>{ contact.phone }</TableCell>
            <TableCell>
                <Button variant="contained" onClick={ deleteCont }>DELETE</Button>
                <Button variant="contained" onClick={editePressed}>EDIT</Button>
            </TableCell>
        </TableRow>
    );
}

export default SingleContact;