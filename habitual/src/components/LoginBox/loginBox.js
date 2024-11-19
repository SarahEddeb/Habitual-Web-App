import { Button } from "@material-ui/core";
import React from "react";
import "../../screens/LoginPage/styles.css";



export default function LoginBox() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Sign In</h2>
        </div>
        <form className="form-wrapper">
            <div className="name">
                <label className="label">username</label>
                <input className="input" type="text"></input>
            </div>
            <div className="password">
                <label className="label">password</label>
                <input className="input" type="password"></input>
            </div>
            <div>
                <Button className="mainButton">Login</Button>
            </div>
        </form>
      </div>
    </div>
  );
}
