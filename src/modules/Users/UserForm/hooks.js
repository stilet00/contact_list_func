import { useHistory, useParams } from "react-router-dom";
import { useData } from "../../../common/hooks";
import { USERS_URL } from "../../../constants/constants";
import React, { useCallback, useEffect, useState } from "react";
import FormFields from "../FormFields/FormFields";

export function useEditUser() {
  const { id } = useParams();
  const { data, setData, saveUser, loader } = useData(USERS_URL + id);
  const [form, setForm] = useState(null);
  const history = useHistory();
  let onInputChange = useCallback(
    (e) => {
      setData({ ...data, [e.target.name]: e.target.value.trim() });
    },
    [data, setData]
  );
  useEffect(() => {
    if (!Array.isArray(data)) {
      setForm(<FormFields data={data} onInputChange={onInputChange} />);
    }
  }, [data, onInputChange]);

  function save(e) {
    if (checkFields()) {
      e.preventDefault();
      saveUser(data).then((res) => history.push("/Users/"));
    } else {
      e.preventDefault();
      alert("Something is wrong!");
    }
  }

  function checkFields() {
    let nameRegExp = /[a-zA-Z\d]/gm;
    let emailRegExp = /^\S+@\S+\.\S+$/g;
    return (
      nameRegExp.test(data.name) && data.phone && emailRegExp.test(data.email)
    );
  }
  return {
    onInputChange,
    save,
    data,
    loader,
    form,
  };
}
