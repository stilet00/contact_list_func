import { useCallback, useEffect, useState } from "react";
import { getAlbums, add, edit, remove } from "../../services/asyncAlbums";

export function useAlbums() {
  const [albums, setAlbums] = useState([]);
  // const [editedContact, setEditedContact] = useState(null)
  // const [formShown, setFormShown] = useState(false)
  useEffect(() => {
    getAlbums().then((contacts) => setAlbums(contacts.data));
  }, []);

  let removeAlbum = useCallback(
    (contactId) => {
      remove(contactId).then((res) => {
        setAlbums(albums.filter((item) => item.id !== res.data.id).reverse());
      });
    },
    [albums]
  );
  // let editPressed = useCallback((data) => {
  //     setEditedContact(data)
  //     setFormShown(!formShown)
  // }, [formShown])

  function save(contact) {
    if (!contact.id) {
      add(contact).then((res) => {
        // setFormShown(!formShown)
        setAlbums([...albums, res.data]);
      });
    } else {
      edit(contact).then((res) => {
        // setEditedContact(null)
        // setFormShown(!formShown)
        // setContacts(contacts.map(item => item.id === res.data.id ?  res.data :  item))
      });
    }
  }
  function cancelEditing() {
    // setFormShown(!formShown)
    // setEditedContact(null)
  }
  function saveToggleState() {
    // setFormShown(!formShown)
    // setFormShown(!formShown)
  }
  return {
    albums,
    setAlbums,
    removeAlbum,
    cancelEditing,
    save,
    saveToggleState,
  };
}
