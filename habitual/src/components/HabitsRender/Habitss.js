import { Button, TableCell, TableRow } from "@material-ui/core";
import axios from "axios";
import "../../App.css";

export default function Habitss(props) {
    const DeleteHabit = (post) => {
      return axios
      .delete("/habits/:id", {data: post})
      .then((res) => console.log(res.data));
    }
    const submitHandler = (e) => {
        // props.removeUser(props.unique)
        let post = { id: props.id};

        DeleteHabit(post)
      };
      
    return (
        <TableRow>
          <TableCell component="th" scope="row" align="left">
            {props.habit}
          </TableCell>
          <TableCell component="th" scope="row" align="right">
            <Button onClick={submitHandler} className="smallButton">Remove</Button>
          </TableCell>
        </TableRow>
      );
}
