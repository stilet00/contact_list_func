import React, {useContext} from 'react';
import SingleContact from "../SingleContact/SingleContact";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {themeContext} from "../../themes/theme-context";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {IOSSwitch} from "../IOSSwitch/IOSSwitch";
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});



function ContactList({ contacts, deleteOne, onEdit, onAdd }) {
    const { theme,  handleChange, isLight} = useContext(themeContext)
    const classes = useStyles();
    return (
        <TableContainer component={Paper} style={theme}>
            <FormGroup style={{marginLeft: 1 + 'em', background: theme.background}}>
                <FormControlLabel
                    control={<IOSSwitch checked={isLight} onChange={(event) => handleChange(event.target.checked)} name="themeSwitcher"  />}
                />
            </FormGroup>
            <Table className={classes.table} size="small" aria-label="a dense table" style={theme}>

                <TableHead>
                    <TableRow>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell align="left"><b>Surname</b></TableCell>
                        <TableCell align="left"><b>Phone number</b></TableCell>
                        <TableCell align="left"><b>Actions</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
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
                    <TableRow>
                        <TableCell align="left">
                            <Button variant="contained" color="primary"
                                    onClick={onAdd}
                            >
                                Add contact
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ContactList;