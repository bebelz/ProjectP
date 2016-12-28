'use strict';

angular
    .module('projectp', ['ngMaterial', 'firebase', 'angularCSS'])

	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('green')
			.accentPalette('orange')
	})

    .component('app', {
        templateUrl: 'app/app.html'
    });
