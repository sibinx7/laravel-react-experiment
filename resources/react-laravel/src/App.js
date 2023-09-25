import React from "react";
import { Route, Switch as Routes } from 'react-router-dom';
import config from '../config/config.js';
import Portal from '../common/portal.js';
import DashboardOrder from './dashboard/order.js';
import DashboardProfile from './dashboard/profile.js';
import DashboardSettings from './dashboard/settings.js';
import About from './About.js';
import Index from './index.js';
import Dashboard from './dashboard/dashboard.js';

export default function App(){  
  return(
    <>
      <Routes>
        <Route path={config.pagePaths.dashboardOrderPath}>
          <Portal selector={config.mountingPoints.dashboardOrderContainer}>
            <DashboardOrder/>
          </Portal>
        </Route>
        <Route path={config.pagePaths.dashboardProfilePath}>
          <Portal selector={config.mountingPoints.dashboardProfileContainer}>
            <DashboardProfile/>
          </Portal>
        </Route>
        <Route path={config.pagePaths.dashboardSettingsPath}>
          <Portal selector={config.mountingPoints.dashboardSettingsContainer}>
            <DashboardSettings/>
          </Portal>
        </Route>
        <Route path={config.pagePaths.dashboardPath}>
          <Portal selector={config.mountingPoints.dashboardContainer}>
            <Dashboard/>
          </Portal>
        </Route>
        <Route path={config.pagePaths.aboutPath}>
          <Portal selector={config.mountingPoints.aboutContainer}>
            <About/>
          </Portal>
        </Route>
        <Route path={config.pagePaths.indexPath}>
          <Portal selector={config.mountingPoints.indexContainer}>
            <Index/>
          </Portal>
        </Route>
      </Routes>
    </>
  )
}