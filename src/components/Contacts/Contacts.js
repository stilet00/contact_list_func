import { useState, useEffect } from 'react';
import {addOne, deleteOne, editOne, getContacts} from "../../services/asyncRequests";
import ContactList from "../ContactList/ContactList";
import Form from "../Form/Form";
import './Contacts.css'

// ========== materialUI
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

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
    const [contacts, setContacts] = useState([])
    const [formShown, setFormShown] = useState(false)
    const [editedContact, setEditedContact] = useState(null)

    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    useEffect(() => {
        getContacts().then(contacts => setContacts(contacts.data))
    }, [])
    // useEffect(() => {
    //     setFormShown(localStorage.setItem('windowsState', formShown))
    // }, [formShown])

    function saveToggleState() {
        setFormShown(!formShown)
        setFormShown(!formShown)
    }
    function deleteContact(e) {
        deleteOne(e.target.parentNode.parentNode.id).then(res => {
            setContacts(contacts.filter(item => item.id !== res.data.id).reverse())
        })
    }
    function editePressed(data) {
        setEditedContact(data)
        setFormShown(!formShown)
    }
    function saveContact(contact) {
        if (!contact.id) {
            addOne(contact).then(res => {
                setFormShown(!formShown)
                setContacts([...contacts, res.data])
            })
        } else {
            editOne(contact).then(res => {
                setEditedContact(null)
                setFormShown(!formShown)
                setContacts(contacts.map(item => item.id === res.data.id ?  res.data :  item))
            })
        }

    }
    function cancelEditing() {
        setFormShown(!formShown)
        setEditedContact(null)
    }


    let page
    if (!formShown) {
        page =
            <ContactList
            contacts={contacts}
            deleteOne={deleteContact}
            onEdit={editePressed}
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
                    control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                />
            </FormGroup>
            {page}

        </div>
    );
}
