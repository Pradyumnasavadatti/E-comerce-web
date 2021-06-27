import "./Log.css";
import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import firebase from "../firebase";
export default function Log_sign() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { login } = useAuth();
  const { signup } = useAuth();
  const [error, setError] = useState("Log In");
  const [error2, setError2] = useState("Sign Up");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const [message, setMessage] = useState("Forgot Password");
  const history = useHistory();
  const [log, changelog] = useState(true);
  const [sign, changesign] = useState(false);
  const [fp, changefp] = useState(false);
  const func1 = () => {
    changelog(true);
    changesign(false);
    changefp(false);
  };
  const func2 = () => {
    changesign(true);
    changelog(false);
    changefp(false);
  };
  const func3 = () => {
    changesign(false);
    changelog(false);
    changefp(true);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);

      history.push("/Items");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  async function handleSubmit2(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError2("Passwords do not match");
    }

    try {
      setError2("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setError2("Login to Continue");
      firebase.database().ref("User").push({
        email: emailRef.current.value,
        cart: "-1",
        orders: "-1",
        Fullname: "-1",
        Mobile: "-1",
        Houseno: "-1",
        Area: "_",
        Town: "-1",
        State: "-1",
      });
      history.push("/");
    } catch {
      setError2("Failed to create an account");
    }

    setLoading(false);
  }

  async function handleSubmit3(e) {
    e.preventDefault();

    try {
      setMessage("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {}

    setLoading(false);
  }

  return (
    <div className="LogMain1">
      {log && (
        <div className="Login">
          <div className="logsubs">
            <div className="loghead">
              <p className="loginhead">{error}</p>
            </div>

            <div className="loginsub1">
              <form onSubmit={handleSubmit} className="formlog">
                <div className="loginsub11">
                  <div className="ipdiv">
                    <div className="inputlog">
                      <input
                        className="inputlogip"
                        type="text"
                        ref={emailRef}
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="inputlog">
                      <input
                        className="inputlogip"
                        type="password"
                        ref={passwordRef}
                        required
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="inputlogbtn">
                    <button
                      disabled={loading}
                      className="inputlogbtn1"
                      type="submit"
                    >
                      Log In
                    </button>
                  </div>
                  <p className="su" onClick={func3}>
                    Forgot Password?
                  </p>
                </div>
              </form>
            </div>
            <div className="loginsub2"></div>
          </div>
        </div>
      )}
      {!log && (
        <div className="Login2" onClick={func1}>
          <p className="largehead">Log In</p>
        </div>
      )}
      {sign && (
        <div className="Login">
          <div className="logsubs">
            <div className="loghead2">
              <p className="loginhead">{error2}</p>
            </div>

            <div className="loginsub122">
              <div className="loginsub112">
                <form onSubmit={handleSubmit2} className="formsign">
                  <div className="ipdiv">
                    <div className="inputlog1">
                      <input
                        className="inputlogip"
                        type="text"
                        placeholder="Email"
                        ref={emailRef}
                        required
                      />
                    </div>
                    <div className="inputlog1">
                      <input
                        className="inputlogip"
                        type="password"
                        placeholder="Password"
                        ref={passwordRef}
                        required
                      />
                    </div>
                    <div className="inputlog1">
                      <input
                        className="inputlogip"
                        type="password"
                        placeholder="Confirm Password"
                        ref={passwordConfirmRef}
                        required
                      />
                    </div>
                  </div>
                  <div className="inputlogbtn2">
                    <button
                      disabled={loading}
                      type="submit"
                      className="inputlogbtn21"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="loginsub2"></div>
          </div>
        </div>
      )}
      {!sign && (
        <div className="signup2" onClick={func2}>
          <p className="largehead">Sign Up</p>
        </div>
      )}
      {fp && (
        <div className="fpmain">
          <div className="fpcard">
            <div className="fpname">
              <p className="fphead">{message}</p>
            </div>
            <form onSubmit={handleSubmit3} className="formfp">
              <div className="fpmid">
                <div className="inputlog1">
                  <input
                    className="inputlogip"
                    type="text"
                    placeholder="Email"
                    ref={emailRef}
                    required
                  />
                </div>
              </div>
              <div className="fpback">
                <p onClick={func1} className="backtxt">
                  Back
                </p>
                <button className="fpbtn" type="submit">
                  Get
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
