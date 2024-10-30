import logo from './logo.svg';
import './App.css';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Jobly</h1>
      <Router>
      <Routes>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
