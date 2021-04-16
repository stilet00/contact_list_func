import React from "react";
import SingleUser from "../SingleUser/SingleUser";
import "./UserList.css";
import { useData, useShowMore } from "../../../common/hooks";
import { USERS_URL } from "../../../constants/constants";
import Button from "@material-ui/core/Button";
import ShowMore from "../../../components/ShowMore/ShowMore";
import Loader from "../../../components/Loader/Loader";

function UserList(props) {
  const { data, deleteData, loading, newUser } = useData(USERS_URL);
  const { renderedItems, showMore, backToMinimal } = useShowMore(data);
  return (
    <>
      <div className={"users-container"}>
        <Loader loading={loading} />
        {data.slice(0, renderedItems).map((item) => {
          return <SingleUser user={item} key={item.id} onDelete={deleteData} />;
        })}
      </div>
      <div className={"control-buttons"}>
        <ShowMore
          data={data}
          showMore={showMore}
          backToMinimal={backToMinimal}
          renderedItems={renderedItems}
        />
        <Button variant="contained" color="primary" onClick={newUser}>
          Add user
        </Button>
      </div>
    </>
  );
}

export default UserList;
