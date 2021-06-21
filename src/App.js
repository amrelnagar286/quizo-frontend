import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.scss'

import QuizPage from './pages/QuizPage/QuizPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';

import ModeBtn from './components/ModeBtn/ModeBtn'

function App() {
  return (
    <div className="App">
        <ModeBtn/>

        <Router>

          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/quiz/:id' component={QuizPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/register'/>
          </Switch>

        </Router>

    </div>
  );
}

export default App;
