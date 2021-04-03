import "./Form.css";
import { useForm } from "./hooks";
import Button from "@material-ui/core/Button";
import { FormGroup } from "@material-ui/core";
import { useContext } from "react";
import { themeContext } from "../../../themes/theme-context";

function Form({ savePressed, givenContact, cancelPressed }) {
  const { contact, saveCont, onInputChange } = useForm(
    givenContact,
    savePressed
  );
  const { theme } = useContext(themeContext);

  return (
    <form action="" onSubmit={saveCont}>
      <FormGroup style={theme}>
        <input
          type="text"
          value={contact.name}
          name={"name"}
          onChange={onInputChange}
        />
        <input
          type="text"
          value={contact.surname}
          name={"surname"}
          onChange={onInputChange}
        />
        <input
          type="phone"
          value={contact.phone}
          name={"phone"}
          onChange={onInputChange}
        />
        <Button variant="contained" type={"submit"}>
          Save
        </Button>
        <Button variant="contained" type={"button"} onClick={cancelPressed}>
          Cancel
        </Button>
      </FormGroup>
    </form>
  );
}

export default Form;
