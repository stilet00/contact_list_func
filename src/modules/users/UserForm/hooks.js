import { useParams } from "react-router-dom";
import { useData } from "../../../common/hooks";
import { USERS_URL } from "../../../constants/constants";
import { useEffect } from "react";

export function useForm() {
    const {id} = useParams()
    const { data, setData, saveUser } = useData(USERS_URL + id)

    useEffect(() => {
        setData({name: '', phone: '', email: ''});
    }, []);


    function save(e) {
        if (checkFields()) {
            e.preventDefault();
            saveUser(data)
        } else {
            e.preventDefault();
            alert("Something is wrong!");
        }
    }
    function onInputChange(e) {
        setData({ ...data, [e.target.name]: e.target.value.trim() });
    }
    function checkFields() {
        return data.name && data.phone && data.email ? true : false;
    }
    return {
        onInputChange,
        save,
        data
    }
}