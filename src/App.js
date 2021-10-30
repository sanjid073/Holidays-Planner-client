
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';

import MyBooking from './Pages/MyBooking/MyBooking';
import ManageAllBooking from './Pages/ManageAllBooking/ManageAllBooking';
import AddaNewOffer from './Pages/AddaNewOffer/AddaNewOffer';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import OfferDetails from './Components/Offers/OfferDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import Footer from './Components/Footer/Footer';

function App() {
  return (
  <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route  path="/home">
              <Home></Home>
          </Route>
          <PrivateRoute path="/myBooking">
            <MyBooking></MyBooking>
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <ManageAllBooking></ManageAllBooking>
          </PrivateRoute>
          <PrivateRoute path="/offer/:id">
            <OfferDetails></OfferDetails>
          </PrivateRoute>
          <PrivateRoute path="/addOffer">
            <AddaNewOffer></AddaNewOffer>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
   
  );
}

export default App;
