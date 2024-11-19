import { Button, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import axios from "axios";
export default function User(props) {
    console.log("key: " + props.unique)

    // Need to add a DELETE request here to remove a user
    const submitHandler = (e) => {
      // props.removePost(props.unique)
      let habit = { id: props.habit};
      console.log('This is user Deleted ID' + props.id);
      DeleteUser(habit)
    };
    const DeleteUser = () => {
      return axios
      .delete("/users/" + props.id)
      .then((res) => console.log(res.data));
    }
  return (
    <TableRow>
      <TableCell component="th" scope="row" align="left">
        {props.name}
      </TableCell>
      <TableCell component="th" scope="row" align="right">
        {props.handle}
      </TableCell>
      <TableCell component="th" scope="row" align="right">
        <Button onClick={submitHandler} className="mainButton">Remove</Button>
      </TableCell>
    </TableRow>
  );
}
