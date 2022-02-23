import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useEffect, useState } from 'react';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatient from './components/AllPatient/AllPatient/AllPatient';
import AddADoctor from './components/AddADoctor/AddADoctor/AddADoctor';
import { auth } from './components/./Login/./firebase.config';
import { signInWithPopup, GoogleAuthProvider, getRedirectResult } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  // console.log(loggedInUser)

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)

      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);



      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route path="/dashboard/all-patients">
              <AllPatient></AllPatient>
            </Route>
            <Route path="/dashboard/add-a-doctor">
              <AddADoctor></AddADoctor>
            </Route>


            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/login">
              <Login signInWithGoogle={signInWithGoogle}></Login>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
