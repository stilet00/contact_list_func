import { useEffect, useState, useCallback } from "react";
import {
  add,
  remove,
  edit,
  get,
} from "../services/asyncData";



export function useData(url) {
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState(null);
  const [formShown, setFormShown] = useState(false);
  useEffect(() => {
    get(url).then((data) => setData(data.data));
  }, [url]);

  let deleteData = useCallback(
    (dataId) => {
      remove(dataId, url).then((res) => {
        setData(
            data.filter((item) => item.id !== res.data.id)
        );
      });
    },
    [data, url]
  );
  let editPressed = useCallback(
    (data) => {
      setEditedData(data);
      setFormShown(!formShown);
    },
    [formShown]
  );

  function saveContact(contact) {
    if (!contact.id) {
      add(contact, url).then((res) => {
        setFormShown(!formShown);
        setData([...data, res.data]);
      });
    } else {
      edit(contact, url).then((res) => {
        setEditedData(null);
        setFormShown(!formShown);
        setData(
          data.map((item) => (item.id === res.data.id ? res.data : item))
        );
      });
    }
  }
  function cancelEditing() {
    setFormShown(!formShown);
    setEditedData(null);
  }
  function saveToggleState() {
    setFormShown(!formShown);
    setFormShown(!formShown);
  }
  return {
    editedData,
    setEditedData,
    data,
    setData,
    deleteData,
    cancelEditing,
    saveContact,
    editPressed,
    saveToggleState,
    formShown,
    setFormShown,
  };
}
