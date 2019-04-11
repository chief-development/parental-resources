import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import FAQ from "./pages/FAQ/FAQ";
import LuAthletics from "./pages/LuAthletics/LuAthleticsPage";
import StaffPage from "./pages/Staff/StaffPage";
import AskAnything from "./pages/AskAnything/AskAnything";
import Handbook from "./pages/Handbook/Handbook";
import AfterSubmit from "./pages/AskAnything/AfterSubmit";
import LogIn from "./pages/Admin/LogIn";
import Admin from "./pages/Admin/AdminPage";
import NewAdmin from "./pages/Admin/NewAdmin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./layouts/MainLayout";
import { db } from "./firebase";

function App() {
  return (
    <Router>
      <Dashboard>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/athletics" component={LuAthletics} />
          <Route path="/staff" component={StaffPage} />
          <Route path="/handbook" component={Handbook} />
          <Route path="/faq" component={FAQ} />
          <Route path="/ask" component={AskAnything} />
          <Route path="/submitted" component={AfterSubmit} />
          <Route path="/login" component={LogIn} />
          <Route path="/admin" component={Admin} />
          <Route path="/newAdmin" component={NewAdmin} />
        </Switch>
      </Dashboard>
    </Router>
  );
}
export default App;
