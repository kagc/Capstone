import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import SingleProject from './components/SingleProject';
import CreateProject from './components/CreateProject';
import EditProject from './components/EditProject';
import Navigation from './components/Navigation';
import HomePage from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/404';
import SearchResultPage from './components/Search';
import Categories from './components/Search/Categories';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    // <BrowserRouter>
    <>
      {/* <NavBar /> */}
      <Navigation isLoaded={loaded} />
      {loaded && (
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <HomePage />
        </Route>
        <Route path='/projects/:projectId' exact={true} >
          <SingleProject />
        </Route>
        <ProtectedRoute path='/editor' exact={true} >
          <CreateProject />
        </ProtectedRoute>
        <ProtectedRoute path='/editor/:projectId' exact={true} >
          <EditProject />
        </ProtectedRoute>
        <Route path='/search/projects/:category/q=:searchTerm'>
          <SearchResultPage />
        </Route>
        <Route path={['/projects', '/circuits','/workshop', '/craft', '/cooking', '/living', '/outside', '/teachers']}>
          <Categories />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      )}
      <Footer />
      </>
    // </BrowserRouter>
  );
}

export default App;
