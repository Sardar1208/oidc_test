import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Signin';
import Callback from './Callback';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/" exact element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;

const Home = () => {
  return (
    <main>
      <h2>Home Page</h2>
      <a href="/signin">Sign In</a>
    </main>
  );
}

