import React, { useContext } from 'react';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { FormGroup } from "@material-ui/core";
import { themeContext } from "../../../themes/theme-context";

function FormFields ({data, onInputChange}) {
    const { theme } = useContext(themeContext);
    return (
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
    );
}

export default FormFields;