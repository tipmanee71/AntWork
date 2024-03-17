import React, { lazy, Suspense, useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";

import Login from "./components/pages/login/LoginPage";
import Register from "./components/pages/register";
import { UnauthorizedPage, NotFoundPage } from "./components/pages/error";
// import Landing from "./components/pages/seller/index";

//User
import ProfilePage from "./components/pages/user/profile";
import MePage from "./components/pages/user/me";
import ViewProfile from "./components/pages/user/profile/ViewProfile";
import Notification from "./components/pages/NotificationPage";
// import Home from "./components/pages/homePage";


import VendorSuggestionPage from "./components/pages/vendor-suggestion";
import RequestInformationPage from "./components/pages/information/request";
import BiddingInformationPage from "./components/pages/information/bidding";

import DetailsPage from "./components/pages/information/detailsPage/details";
import SellerHomePage from "./components/pages/seller/index";
import JoinSeller from "./components/pages/seller/join-seller";
import ManageProduct from "./components/pages/seller/manage-product";
import SellerDashboard from "./components/pages/seller/sellerDashboard";
import ManageOrders from "./components/pages/seller/sellerDashboard/manageOrders/manage-orders";
import ManageGigs from "./components/pages/seller/sellerDashboard/manageGigs/manage-gigs";
import OrdersPage from "./components/pages/user/orders";
import InboxPage from "./components/pages/user/inbox";

// workers
import WorkersHomePage from "./components/pages/workers";
import DetailsWorkers from "./components/pages/workers/detailsWorkers/details";
import JoinWorkers from "./components/pages/workers/workers_onboarding/join-workers";
import ManageProductCloudWorker from "./components/pages/workers/workers_products/manage-products-cloud-workers";
import ProposeHypothetically from "./components/pages/workers/detailsWorkers/proposeHypothetically";
import ProgressOrders from "./components/pages/seller/sellerDashboard/manageOrders/progressOrders/progress-orders";

// Admin
import {
  AdminDashboardCost,
  AdminDashboardOt,
  AdminDashboardWorkingTime,
} from "./components/pages/admin";


/* NEW */
import SignUp from "./components/pages/signup";
import SignUpTwo from "./components/pages/signup2";
import Landing from "./components/pages/landing";
// import BecomeFreelance from "./components/pages/BecomeFreelance";
import Homepage from "./components/pages/homepage";
import WorkDetail from "./components/pages/freelance/workDetail";


//tem
import Homepagelabor from "./components/pages/temporary";
import CompanySignUp from "./components/pages/signup/singupCompany";
import JobGroupDetail from "./components/pages/temporary/"

//company 
import CompanyManagePage from "./components/pages/company-manage/index";
import createWork from "./components/pages/seller/createWork";

const useStyles = makeStyles((theme) => ({
  content: {
    // flexGrow: 1,
    // display: "flex",
    // justifyContent: "center",
    // padding: 0,
  },
}));

const Routers = () => {
  const classes = useStyles();
  const { user: currentUser } = useSelector((state) => state.auth);

  const RedirectLogin = () => (
    <Route>
      <Redirect to="/login" />
    </Route>
  );

  const AdminRoute = ({ component: Component, ...rest }) => {
    if (currentUser) {
      return (
        <Route
          {...rest}
          render={(props) =>
            currentUser.roles.includes("ROLE_ADMIN") === true ? (
              <Component {...props} />
            ) : (
              <Redirect to="/unauthorized" />
            )
          }
        />
      );
    } else {
      return <RedirectLogin />;
    }
  };

  const FreelanceRoute = ({ component: Component, ...rest }) => {
    if (currentUser) {
      return (
        <Route
          {...rest}
          render={(props) =>
            currentUser.roles.includes("ROLE_FREELANCE") === true ? (
              <Component {...props} />
            ) : (
              <Redirect to="/unauthorized" />
            )
          }
        />
      );
    } else {
      return <RedirectLogin />;
    }
  };

  const ManagerRoute = ({ component: Component, ...rest }) => {
    if (currentUser) {
      return (
        <Route
          {...rest}
          render={(props) =>
            currentUser.roles.includes("ROLE_MANAGER") === true ? (
              <Component {...props} />
            ) : (
              <Redirect to="/unauthorized" />
            )
          }
        />
      );
    } else {
      return <RedirectLogin />;
    }
  };

  const UserRoute = ({ component: Component, ...rest }) => {
    if (currentUser) {
      return (
        <Route
          {...rest}
          render={(props) =>
            currentUser.roles.includes("ROLE_USER") === true ? (
              <Component {...props} />
            ) : (
              <Redirect to="/unauthorized" />
            )
          }
        />
      );
    } else {
      return <RedirectLogin />;
    }
  };

  const WarehouseRoute = ({ component: Component, ...rest }) => {
    if (currentUser) {
      return (
        <Route
          {...rest}
          render={(props) =>
            currentUser.roles.includes("ROLE_WAREHOUSE") === true ? (
              <Component {...props} />
            ) : (
              <Redirect to="/unauthorized" />
            )
          }
        />
      );
    } else {
      return <RedirectLogin />;
    }
  };

  return (
    <Container
      maxWidth={false}
      style={{ padding: 0 }}
    >
      <Suspense fallback={<div>Loading..</div>}>
        <Switch>
          <Route
            exact
            path={["/"]}
            component={() =>
              currentUser ? <Redirect to="/homepage" /> : <Redirect to="/landing" />
            }
          />
          {/* NEW */}
          {/* <Route exact path={["/", ""]} component={Landing} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/signup/:type" component={SignUp} />
          <Route exact path="/signup2/:type" component={SignUpTwo} />
          

          {/* <Route exact path="/become_freelance" component={JoinSeller} /> */}
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/workDetail" component={WorkDetail} />



          
          {/* // temporary */}
          <Route exact path="/homepagelabor" component={Homepagelabor}/>
          <Route path="/job-groups/:id" component={JobGroupDetail} />


           {/* company */}
          <Route exact path="/company/singup" component={CompanySignUp}/>
          <Route exact path="/company_manage" component={CompanyManagePage}/>
          <Route exact path="/seller_homepage" component={SellerHomePage} />
          <Route exact paath="/seller_creatework" component={createWork}/>



          <FreelanceRoute exact path="/manage_product" component={ManageProduct} />





          <Route
            exact
            path="/company/:company/request/:openposition"
            component={RequestInformationPage}
          />
          <Route
            exact
            path="/company/:company/bidding/:openposition"
            component={BiddingInformationPage}
          />

          //crateโดย Manager
          <Route exact path="/register" component={Register} />

          <Route exact path="/details" component={DetailsPage} />
          
          <Route exact path="/freelance_onboarding" component={JoinSeller} />
          <Route exact path="/seller_dashboard" component={SellerDashboard} />
          <Route exact path="/manage_orders" component={ManageOrders} />
          <Route exact path="/manage_gigs" component={ManageGigs} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/orders" component={OrdersPage} />
          <Route exact path="/inbox" component={InboxPage} />
          
          {/* Cloud Workers */}
          <Route exact path="/workers" component={WorkersHomePage} />
          <Route exact path="/details_workers" component={DetailsWorkers} />
          <Route exact path="/workers_onboarding" component={JoinWorkers} />
          <Route exact path="/manage_product_cloud_workers" component={ManageProductCloudWorker} />
          <Route exact path="/hire" component={ProposeHypothetically} />
          <Route exact path="/manage_orders/edit" component={ProgressOrders} />
          <Route
            exact
            path="/vendor-suggestion"
            component={VendorSuggestionPage}
          />
          <Route exact path="/me" component={MePage} />
          <Route exact path="/unauthorized" component={UnauthorizedPage} />
          <Container>
            {/* User Route */}
            <UserRoute exact path="/notification" component={Notification} />

            {/* Admin Route */}
            <AdminRoute
              exact
              path="/admin/dashboard/cost"
              component={AdminDashboardCost}
            />
            <AdminRoute
              exact
              path="/admin/dashboard/ot"
              component={AdminDashboardOt}
            />
            <AdminRoute
              exact
              path="/admin/dashboard/workingtime"
              component={AdminDashboardWorkingTime}
            />
            
            

            
          </Container>
          
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default Routers;
