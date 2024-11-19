import "./App.css";
import React, { useState, useContext, useMemo } from "react";


import {
  BrowserRouter as Router,
  // Routes,
  Route,
  // Link,
  Redirect,
  Navigate,
  Switch,
} from "react-router-dom";
import CommunityPage from "./screens/CommunityPage/CommunityPage";
import ProfilePage from "./screens/ProfilePage/ProfilePage";
import HabitsPage from "./screens/HabitsPage/HabitsPage";

import ProfileAssessPage from "./screens/ProfileAssessPage/ProfileAssessPage";
import ProfileHabitsPage from "./screens/ProfileHabitsPage/ProfileHabitsPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import SelfAssessmentPage from "./screens/SelfAssessmentPage/SelfAssessmentPage";
import AdminPage from "./screens/AdminPage/AdminPage";
import { UserContext } from "./contexts/UserContext";

export function App() {
  const [userType, setUserType] = useState("");
  const [user, setUser] = useState("");
  const [admin, setAdmin] = useState("adminnnn");
  const [name, setName] = useState("")
  const [userId, setUserId] = useState("");

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  console.log(user);
  return (
    <Router>
      <div>
        {user && user !== "admin" ? <Redirect to="/community" /> : user === "admin" ? <Redirect to="/admin" /> : <Redirect to="/login" /> }

        {/* Creating the routes */}
        <Switch>
          <UserContext.Provider value={{ user, setUser, name, setName, userId, setUserId }}>
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/community" component={CommunityPage} />
            <Route
              exact
              path="/selfassessmentquiz"
              component={SelfAssessmentPage}
            />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/profileAssess" component={ProfileAssessPage} />
            <Route exact path="/profileHabits" component={ProfileHabitsPage} />
            <Route exact path="/habits" component={HabitsPage} />
          </UserContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
