"use strict";
const router_1 = require('@angular/router');
const home_component_1 = require('./partials/home/home.component');
const about_component_1 = require('./partials/about/about.component');
exports.routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
