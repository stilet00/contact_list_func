import React from 'react';
import { useForm } from "./hooks";


function UserForm () {
    const { save, loader, form } = useForm()
    return (
        <form action="" onSubmit={save}>
            {loader}
            {form}
        </form>
    );
}


export default UserForm;