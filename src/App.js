import React from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ResultsPage from './pages/ResultsPage';
import Route from './components/Route';

const App = () => {
  return (
    <div>
    <Route path="/">
      <LandingPage />
    </Route>
    <Route path="/search">
      <ResultsPage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
    </div>
  );
}

export default App;
