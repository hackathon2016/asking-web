"use strict";angular.module("askingWebApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$httpProvider","$routeProvider",function(a,b){a.defaults.useXDomain=!0,a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",b.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("askingWebApp").constant("askingUrl","https://asking.herokuapp.com/answer").controller("MainCtrl",["$scope","$resource","askingUrl",function(a,b,c){function d(c){c.questions.filter(function(a){return!!a.question}).length?(angular.forEach(a.model.questions,function(b){a.model.answers.push(b)}),a.model.questions=c.questions,c.contextUrl&&(e=b(c.contextUrl))):c.contextUrl&&b(c.contextUrl).get(d)}var e=b(c);a.reset=function(){a.model={questions:[{question:"Wat kan ik voor u betekenen?",parameterName:"query",userInput:""}],answers:[]}},a.ask=function(){var b=a.model.questions,c={},f=!1;angular.forEach(b,function(a){a.warning=a.regexForAnswerGivenByCustomer&&!/.+/.match(a.userInput),a.warning?f=!0:c[a.parameterName||"query"]=a.userInput}),f||e.save(null,$.param(c),d)},a.reset()}]);