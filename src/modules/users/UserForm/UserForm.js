import React, { useContext, useEffect, useState } from 'react';
import { themeContext } from "../../../themes/theme-context";
import { FormGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link, useParams } from "react-router-dom";
import { useForm } from "./hooks";


function UserForm () {
    const { theme } = useContext(themeContext);
    const { save, onInputChange, data } = useForm()
    return (
        <form action="" onSubmit={save}>
            <FormGroup style={theme}>
                <input
                    type="text"
                    value={data.name}
                    name={"name"}
                    onChange={onInputChange}
                />
                <input
                    type="tel"
                    value={data.phone}
                    name={"phone"}
                    onChange={onInputChange}
                />
                <input
                    type="email"
                    value={data.email}
                    name={"email"}
                    onChange={onInputChange}
                />
                <Button variant="contained" type={"submit"}>
                    Save
                </Button>
                <Button variant="contained" type={"button"}>
                    <Link to={'/users'} className={"button-inner"}>
                        Back
                    </Link>
                </Button>
            </FormGroup>
        </form>
    );
}


export default UserForm;