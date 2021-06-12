import React, { createContext, useContext } from "react";
import { Router, Switch, Route } from "react-router-dom";

//Páginas
import Customer from "./pages/customer/index";
import CustomerRegistration from "./pages/customerRegistration/index";
import Dashboard from "./pages/dashboard/index";
import Login from "./pages/login/index";
import MedicalRecord from "./pages/medicalRecord/index";
import NewAppointment from "./pages/newAppointment/index";
import Schedule from "./pages/schedule/index";
import Specialist from "./pages/specialist/index";

//Estilização
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//Autenticação
import { AuthProvider } from "./contexts/AuthContext";
import history from './contexts/history';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D31C5B",
    },
  },
});

function App() {
  return (
     <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route
              path="/customerRegistration"
              component={CustomerRegistration}
            />
            <Route path="/customer" component={Customer} />
            <Route path="/medicalRecord" component={MedicalRecord} />
            <Route path="/newAppointment" component={NewAppointment} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/specialist" component={Specialist} />
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
