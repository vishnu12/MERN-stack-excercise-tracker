import React from 'react';
import Navbar from './components/Navbar'
import {Link,Switch,Route} from 'react-router-dom'
import Exercises from './components/Exercises'
import CreateExercise from './components/CreateExecise'
import CreateUser from './components/CreateUser'
import Editlist from './components/Editlist'
function App() {
  return (
    <React.Fragment>
        <Navbar />
        <Switch>
     <Route exact path='/' component={Exercises} />
     <Route path='/user' component={CreateUser} />
     <Route path='/create' component={CreateExercise} />
     <Route path='/update/:id' component={Editlist} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
