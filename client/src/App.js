import React from 'react'

// navigation
import { BrowserRouter as Router, Route, Switch, useLocation, HashRouter, Redirect } from 'react-router-dom';

// layouts
import DashboardLayout from './Layouts/DashboardLayout';
import LandingLayout from './Layouts/LandingLayout';

// components
import NavbarApp from "./Components/NavbarApp";
import FooterApp from './Components/FooterApp';

// routes
import * as ROUTES from './Constants/routes';

// pages
import LandingPage from './Pages/LandingPage';
import PricingPage from './Pages/PricingPage';

// auth
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';

// dashboard
import Users from './Dashboard/Users';
import Account from './Dashboard/Account';
import NewFeed from './Dashboard/NewFeed';
import Quote from './Dashboard/Quote';
import Feeds from './Dashboard/Feeds';

// blog
import Blogs from './Dashboard/Blogs';
import BlogDetail from './Dashboard/BlogDetail';
import NewBlog from './Dashboard/NewBlog';

const App = () => {
	return (
		<React.Fragment>
        <Router>
          
          <NavbarApp/>

          <Switch>

            <LandingLayout exact path={ROUTES.LANDING} component={LandingPage}/>
            <LandingLayout exact path={ROUTES.PRICING} component={PricingPage}/>

            <LandingLayout exact path={ROUTES.REGISTER} component={Register}/>
            <LandingLayout exact path={ROUTES.LOGIN} component={Login}/>

            <DashboardLayout exact path={ROUTES.QUOTE} component={Quote}/>

            <DashboardLayout exact path={ROUTES.USERS} component={Users}/>
            <DashboardLayout exact path={ROUTES.ACCOUNT} component={Account}/>

            <DashboardLayout exact path={ROUTES.FEEDS} component={Feeds}/>
            <DashboardLayout exact path={ROUTES.NEWFEED} component={NewFeed}/>

            <DashboardLayout exact path={ROUTES.BLOGS} component={Blogs}/>
            <DashboardLayout exact path={ROUTES.NEWBLOG} component={NewBlog}/>
            <DashboardLayout path="/blogs/detail" component={BlogDetail} />

            <DashboardLayout path = '/blogs/detail/:id?' component={BlogDetail} />

          </Switch>

        </Router>
      </React.Fragment>
	)
}

// <Redirect from="*" to="/blogs/detail" />
/*
            <Route exact path={ROUTES.LANDING} component={LandingPage}/>
            <Route exact path={ROUTES.PRICING} component={PricingPage}/>

            <Route exact path={ROUTES.REGISTER} component={Register}/>
            <Route exact path={ROUTES.LOGIN} component={Login}/>

            <Route exact path={ROUTES.ACCOUNT} component={Account}/>

            <Route exact path={ROUTES.DASHBOARD} component={Dashboard}/>
            <Route exact path={ROUTES.QUOTE} component={Quote}/>
*/

export default App;
