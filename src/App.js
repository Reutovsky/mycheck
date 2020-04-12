import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import { isNull, isEmpty } from 'lodash';
import { MainPage } from './components/MainPage';
import { EmailConfirm } from './components/EmailConfirm';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { Profile } from './components/Profile';
import { getCurrentUser } from './redux/actionCreators';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  const { user, status } = useSelector((state) => state.auth);

  // {/* <Route
  // exact
  // render={() =>
  //   path="/"
  //   isEmpty(user) && vkLocation ? (
  //     <AbsoluteRedirect to={vkLocation} />
  //     ) : (
  //       <SignIn />
  //       )
  //     }
  //   /> */}

  return (
    <Router>
      <div className={isMobile ? 'mobile' : 'desktop'}>
        <Switch>
          <Route
            exact
            path="/"
            component={MainPage}
          />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/auth/email/confirm" component={EmailConfirm} />
          {status === 'ok' && !isEmpty(user) && (
            <Route path="/profile" component={Profile} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
