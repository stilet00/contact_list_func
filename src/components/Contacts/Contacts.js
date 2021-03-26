import ContactList from "../ContactList/ContactList";
import Form from "../Form/Form";
import './Contacts.css'


// ========== materialUI
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {useContacts, useTheme} from "./hooks";
import {useContext} from "react";
import {ThemeContext} from "../../themes/theme-context";


const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#52d869',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});
// ========== materialUI

export default function Contacts(props) {
    const {
        contacts,
        editedContact,
        deleteContact,
        cancelEditing,
        editPressed,
        saveContact,
        saveToggleState,
        formShown
    } = useContacts()
    const {
        state,
        handleChange
    } = useTheme()

    let page
    if (!formShown) {
        page =
            <ContactList
            contacts={contacts}
            deleteOne={deleteContact}
            onEdit={editPressed}
            onAdd={saveToggleState}
        />
    } else {
        page = <Form
            givenContact={editedContact}
            savePressed={saveContact}
            cancelPressed={cancelEditing}
        />


    }
    return (

            <div className={'container'}>
                    <FormGroup>
                        <FormControlLabel
                            control={<IOSSwitch checked={state.themeSwitcher} onChange={handleChange} name="themeSwitcher" />}
                        />
                    </FormGroup>
                    {page}
            </div>


    );
}

