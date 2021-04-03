import { useEffect, useState, useCallback } from "react";
import { getUsers, remove, edit, add } from "../../services/asyncUsers";

export function useUsers() {
  const [users, setUsers] = useState([]);
  // const [editedContact, setEditedContact] = useState(null);
  // const [formShown, setFormShown] = useState(false);
  useEffect(() => {
    getUsers().then((users) => setUsers(users.data));
  }, []);

  let removeUser = useCallback(
    (contactId) => {
      remove(contactId).then((res) => {
        setUsers(users.filter((item) => item.id !== res.data.id));
      });
    },
    [users]
  );
  // let editPressed = useCallback(
  //     (data) => {
  //         setEditedContact(data);
  //         setFormShown(!formShown);
  //     },
  //     [formShown]
  // );

  function saveContact(user) {
    if (!user.id) {
      add(user).then((res) => {
        // setFormShown(!formShown);
        setUsers([...users, res.data]);
      });
    } else {
      edit(user).then((res) => {
        // setEditedContact(null);
        // setFormShown(!formShown);
        setUsers(
          users.map((item) => (item.id === res.data.id ? res.data : item))
        );
      });
    }
  }
  // function cancelEditing() {
  //     setFormShown(!formShown);
  //     setEditedContact(null);
  // }
  // function saveToggleState() {
  //     setFormShown(!formShown);
  //     setFormShown(!formShown);
  // }
  return {
    users,
    removeUser,
  };
}
