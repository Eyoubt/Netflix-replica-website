import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import Footer from "./Footer";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        // Logged in
        console.log(userAuth);
      } else {
        dispatch(logout());
        // Logged out
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <div>
            <LoginScreen />
            <Footer />
          </div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <HomeScreen />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/profile"
              element={
                <div>
                  <ProfileScreen />
                  <Footer />
                </div>
              }
            ></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
