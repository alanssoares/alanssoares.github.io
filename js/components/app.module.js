(function(angular) {
	"use strict";
	
	/* App Module */
	var appModule = angular.module('app', [
	           'ngResource',
	           'ngSanitize',
	           'ui.router', 
	           'ui.bootstrap',
	           'posts'
	]);

	appModule.config(['$compileProvider', function ($compileProvider) {
	  $compileProvider.debugInfoEnabled(false);
	}]);
	
})(angular);
