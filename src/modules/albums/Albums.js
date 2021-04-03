import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Albums.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import { themeContext } from "../../themes/theme-context";
import { makeStyles } from "@material-ui/core/styles";
import { useAlbums } from "./hooks";
import SingleAlbum from "./SingleAlbum/SingleAlbum";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function Albums(props) {
  const { albums } = useAlbums();
  const { theme } = useContext(themeContext);
  const classes = useStyles();
  return (
    <div className={"albums-container"}>
      <TableContainer component={Paper} style={theme}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
          style={theme}
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Button variant="contained" color="primary">
                  <Link to="/" className={"button-inner"}>
                    Back
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <b>Name</b>
              </TableCell>
              <TableCell align="left">
                <b>Surname</b>
              </TableCell>
              <TableCell align="left">
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {albums.map((item) => {
              return (
                <SingleAlbum
                  // deleteCont={deleteOne}
                  album={item}
                  // onEdit={onEdit}
                  key={item.id}
                />
              );
            })}
            <TableRow>
              <TableCell align="left">
                <Button
                  variant="contained"
                  color="primary"
                  // onClick={onAdd}
                >
                  Add contact
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Albums;
