import { Link, useHistory, useParams } from "react-router-dom";
import { useData } from "../../../common/hooks";
import { USERS_URL } from "../../../constants/constants";
import Button from "@material-ui/core/Button";
import { FormGroup } from "@material-ui/core";
import React, {  useContext } from "react";
import { themeContext } from "../../../themes/theme-context";

export function useForm() {
    const { theme } = useContext(themeContext);
    const { id } = useParams()
    const { data, setData, saveUser, loader } = useData(USERS_URL + id)
    const history = useHistory()
    let form;
    form = data ? (
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
        </FormGroup> ) : null

    function save(e) {
        if (checkFields()) {
            e.preventDefault();
            saveUser(data)
            setTimeout(() => {
                history.push('/users/')
            }, 500)

        } else {
            e.preventDefault();
            alert("Something is wrong!");
        }
    }
    function onInputChange(e) {
        setData({ ...data, [e.target.name]: e.target.value.trim() });
    }
    function checkFields() {
        let nameRegExp = /[a-zA-Z\d]/gm;
        let emailRegExp = /^\S+@\S+\.\S+$/g
        return nameRegExp.test(data.name) && data.phone && emailRegExp.test(data.email)
    }
    return {
        onInputChange,
        save,
        data,
        loader,
        form,
    }
}
