import React from "react";
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
import AnsweredQuestions from "./pages/Admin/AnsweredQuestions";
import AccessDenied from "./pages/Admin/AccessDenied";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./layouts/MainLayout";
import "react-notifications/lib/notifications.css";
import Compliance from "./pages/LuAthletics/compliance";
import TrainingDeparment from "./pages/LuAthletics/trainingDepartment";
import Insurance from "./pages/LuAthletics/insurance";
import Booster from "./pages/LuAthletics/boostersBrochure";
import Banned from "./pages/LuAthletics/bannedDrugs";
import DrugT from "./pages/LuAthletics/drugTesting";
import concussionM from "./pages/LuAthletics/concussionM";
import NCAAhandbook from "./pages/Handbook/NCAAHandbook";
import SLShandbook from "./pages/Handbook/SLSHandbook";

function App() {
  return (
    <Router>
      <Dashboard>
        <Switch>
          {/*All Routes to every tab in the Dashboard*/}
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
          <Route path="/compliance" component={Compliance} />
          <Route path="/insurance" component={Insurance} />
          <Route path="/boostersBrochure" component={Booster} />
          <Route path="/banned_drugs" component={Banned} />
          <Route path="/drug_testing_policy" component={DrugT} />
          <Route path="/NCAA_handbook" component={NCAAhandbook} />
          <Route path="/SLS_handbook" component={SLShandbook} />
          <Route path="/concussion_management_policy" component={concussionM} />
          <Route path="/trainingDepartment" component={TrainingDeparment} />
          <Route path="/answered" component={AnsweredQuestions} />
          <Route path="/accessdenied" component={AccessDenied} />
        </Switch>
      </Dashboard>
    </Router>
  );
}
export default App;
