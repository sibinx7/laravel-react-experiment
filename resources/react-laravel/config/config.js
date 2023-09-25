const basePath = '';
const baseUrl = ''
export default {
  mountingPoints: {
    dashboardProfileContainer: ".dashboard__profile",
    dashboardSettingsContainer: ".dashboard__settings",
    dashboardOrderContainer: ".dashboard__order", 
    dashboardContainer: ".dashboard",
    aboutContainer: ".about", 
    indexContainer: ".index"  
  },
  pagePaths: {
    baseUrl,
    dashboardProfilePath: `${basePath}/dashboard/profile.html`,
    dashboardSettingsPath: `${basePath}/dashboard/settings.html`,
    dashboardOrderPath: `${basePath}/dashboard/order.html`,
    dashboardPath: `${basePath}/dashboard.html`,
    aboutPath: `${basePath}/about.html`,    
    indexPath: `${basePath}`,    
  },
}