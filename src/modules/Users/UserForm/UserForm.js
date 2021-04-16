import React from "react";
import { useEditUser } from "./hooks";

function UserForm() {
  const { save, form } = useEditUser();
  return (
    <form action="" onSubmit={save}>
      {form}
    </form>
  );
}

export default UserForm;
