import logo from './logo.svg';
import './App.css';
import Login from './pages/auth/login';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Jobly</h1>
      <Router>
        <Route path="/login" component={Login}></Route>
      </Router>
    </div>
  );
}

export default App;
