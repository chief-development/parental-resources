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
import Compliance from "./pages/Compliance/Compliance";
import NewAdmin from "./pages/Admin/NewAdmin";
import TrainingDeparment from "./pages/TrainingDeparment/TrainingDepartment";
import AnsweredQuestions from "./pages/Admin/AnsweredQuestions";
import AccessDenied from "./pages/Admin/AccessDenied";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./layouts/MainLayout";
import { db } from "./firebase";
import "react-notifications/lib/notifications.css";

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
          <Route path="/compliance" component={Compliance} />
          <Route path="/trainingDepartment" component={TrainingDeparment} />
          <Route path="/admin" component={Admin} />
          <Route path="/newAdmin" component={NewAdmin} />
          <Route path="/answered" component={AnsweredQuestions} />
          <Route path="/accessdenied" component={AccessDenied} />
        </Switch>
      </Dashboard>
    </Router>
  );
}
export default App;
