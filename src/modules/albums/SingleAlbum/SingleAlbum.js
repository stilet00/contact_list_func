import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { themeContext, useThemeContext } from "../../../themes/theme-context";

function SingleAlbum({ album }) {
    const { theme } = useContext(themeContext);
  return (
    <TableRow>
      <TableCell style={{color: theme.color}}>{album.id}</TableCell>
      <TableCell style={{color: theme.color}}>{album.title}</TableCell>
    </TableRow>
  );
}

export default SingleAlbum;
