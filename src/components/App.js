import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import QuestionsIndex from './QuestionsIndex';
import QuestionsShow from './QuestionsShow'

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <Link to='/'>Home</Link> | <Link to='/questions'>Questions</Link>
      </nav>
      <hr />

      <Route exact path="/" component={QuestionsIndex} />
      <Route exact path="/questions" component={QuestionsIndex} />
      <Route path="/questions/:id" component={QuestionsShow} />
    </div>
  </Router>
);

export default App;
