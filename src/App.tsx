import Shell from './Shell';
import * as React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import { load as loadFont } from 'webfontloader';

export default function App(props: {}) {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ Shell }>
        <IndexRoute getComponent={ getHomePageComponent }/>
      </Route>
    </Router>
  );
}

function getHomePageComponent(location, cb: Function) {
  require.ensure([], require => {
    cb(null, require<any>('./pages/HomePage').default);
  }, 'HomePage');
}

loadFont({
  google: {
    families: ['RobotoCondensed:300,400,400i,700']
  }
});
