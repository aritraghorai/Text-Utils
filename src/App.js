
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(63 88 110)'
      showAlert("Dark Mode Has Been Enable Successfully", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Has Been Enable Successfully", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text Utils" aboutText="About" mode={mode} toogleMode={toogleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            use exact to exact match
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter The Text to analyze" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;
