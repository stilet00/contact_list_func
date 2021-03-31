import React from 'react';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function SingleContact( { contact, deleteCont, onEdit }) {
    return (
        <TableRow id={ contact.id }>
            <TableCell>{ contact.name }</TableCell>
            <TableCell>{ contact.surname }</TableCell>
            <TableCell>{ contact.phone }</TableCell>
            <TableCell>
                <Button variant="contained" onClick={() => deleteCont(contact.id) }>DELETE</Button>
                <Button variant="contained" onClick={() => onEdit(contact)}>EDIT</Button>
            </TableCell>
        </TableRow>
    );
}

export default SingleContact;