import { useCallback, useState } from "react";

export function useTogglePages() {
  const [formShown, setFormShown] = useState(false);
  function hideForm() {
    setFormShown(!formShown);
  }
  function saveToggleState() {
    setFormShown(!formShown);
    setFormShown(!formShown);
  }
  return {
    formShown,
    setFormShown,
    hideForm,
    saveToggleState,
  };
}
export function useEditor() {
  const [editedData, setEditedData] = useState(null);
  let editPressed = useCallback((data) => {
    setEditedData(data);
  }, []);
  return {
    editPressed,
    editedData,
    setEditedData,
  };
}
