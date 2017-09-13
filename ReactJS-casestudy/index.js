import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

// Layout
import App from './App';

// Pages
import Home from './components/Home';
import BooksList from './components/BooksList';
import DVDList from './components/DVDList';
import Dev from './components/Dev';
import Des from './components/Des';
import Edu from './components/Edu';
import Ent from './components/Ent';
import EduBooks from './components/EduBooks';
import EntBooks from './components/EntBooks';
import DevBooks from './components/DevBooks';
import DesBooks from './components/DesBooks';


var destination = document.getElementById('root');


ReactDOM.render(
<Router history={browserHistory}>
  <Route component={App}>
    <Route path="/" component={Home} />

     <Route path="BooksList">
      	<IndexRoute component={BooksList} />
      		<Route path="DevBooks" component={DevBooks}/>
      		<Route path="DesBooks" component={DesBooks}/>
    </Route>
	   <Route path="DVDList">
      	<IndexRoute component={DVDList} />
      		<Route path="EduBooks" component={EduBooks}/>
      		<Route path="EntBooks" component={EntBooks}/>
    </Route>
   </Route>
  </Router>
	, destination

	)
