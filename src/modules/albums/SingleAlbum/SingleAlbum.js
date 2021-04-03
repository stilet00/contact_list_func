import React from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function SingleAlbum({ album, deleteCont, onEdit }) {
  return (
    <TableRow id={album.id}>
      <TableCell>{album.userId}</TableCell>
      <TableCell>{album.title}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          fullWidth={true}
          onClick={() => deleteCont(album.id)}
        >
          DELETE
        </Button>
        <Button
          variant="contained"
          fullWidth={true}
          onClick={() => onEdit(album)}
        >
          EDIT
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default SingleAlbum;
