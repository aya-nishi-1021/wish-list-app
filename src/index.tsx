import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'ress';
import './styles/foundation/base.scss';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Setting from './pages/Setting';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
