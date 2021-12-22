"use strict";
exports.__esModule = true;
var express_1 = require("express");
var auth_1 = require("./auth");
var user_1 = require("./user");
var booking_1 = require("./booking");
var type_1 = require("./type");
var routes = (0, express_1.Router)();
routes.use('/auth', auth_1["default"]);
routes.use('/user', user_1["default"]);
routes.use('/booking', booking_1["default"]);
routes.use('/type', type_1["default"]);
exports["default"] = routes;