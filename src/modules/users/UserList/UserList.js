import React from "react";
import SingleUser from "../SingleUser/SingleUser";
import "./UserList.css";
import { useData, useShowMore } from "../../../common/hooks";
import { USERS_URL } from "../../../constants/constants";
import Button from "@material-ui/core/Button";

function UserList(props) {
  const { data, deleteData, loader, newUser } = useData(USERS_URL);
  const { renderedItems, button } = useShowMore(data);
  return (
    <>
      <div className={"users-container"}>
        {loader}
        {data.slice(0, renderedItems).map((item) => {
          return <SingleUser user={item} key={item.id} onDelete={deleteData} />;
        })}
      </div>
      <div className={"control-buttons"}>
        {button}
        <Button variant="contained" color="primary" onClick={newUser}>
          Add user
        </Button>
      </div>
    </>
  );
}

export default UserList;
