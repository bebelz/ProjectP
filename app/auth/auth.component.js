'use strict';

angular
    .module('projectp')

    .component('auth', {
        templateUrl: 'app/auth/auth.component.html',
		css: 'app/auth/auth.component.css',
        controller: authController,
        controllerAs: 'vm',
		bindings: {
        	title: '<'
		}
    });

authController.$inject = ['authService'];
function authController(authService) {
	// Methods
    var vm = this;
    vm.changeAuthState = changeAuthState;
    vm.login = login;
    vm.logout = logout;
    vm.isUserLogged = isUserLogged;
    vm.getLoggedUser = getLoggedUser;

    function changeAuthState() {
        if(authService.getLoggedUser()) {
			vm.logout();
        } else {
			vm.login();
        }
    }

    function login() {
		authService.login();
    }

    function logout() {
		authService.logout();
    }

    function isUserLogged() {
    	return authService.getLoggedUser() != null;
	}

	function getLoggedUser() {
		return authService.getLoggedUser();
	}
}
