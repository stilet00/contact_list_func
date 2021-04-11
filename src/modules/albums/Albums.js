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
import SingleAlbum from "./SingleAlbum/SingleAlbum";
import { useData, useShowMore } from "../../common/hooks";
import { ALBUMS_URL } from "../../constants/constants";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function Albums(props) {
  const { data, loader } = useData(ALBUMS_URL);
  const { theme } = useContext(themeContext);
  const { renderedItems, button } = useShowMore(data);
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
              <td>
                <Button variant="contained" color="primary">
                  <Link to="/" className={"button-inner"}>
                    Back
                  </Link>
                </Button>
              </td>
            </TableRow>
            <TableRow>
              <td>{loader}</td>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <b>ID</b>
              </TableCell>
              <TableCell align="left">
                <b>Title</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(0, renderedItems).map((item) => {
              return <SingleAlbum album={item} key={item.id} />;
            })}
            <TableRow>
              <td>{button}</td>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Albums;
