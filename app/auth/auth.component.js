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

function authController($firebaseAuth) {
	// Init
	var auth = $firebaseAuth();

	// Methods
    var vm = this;
    vm.loggedUser = auth.$getAuth();
    vm.changeAuthState = changeAuthState;
    vm.login = login;
    vm.logout = logout;

    function changeAuthState () {
        if(vm.loggedUser) {
			vm.logout();
        } else {
			vm.login();
        }
    }

    function login () {
		var provider = new firebase.auth.GoogleAuthProvider();
		auth.$signInWithPopup(provider)
            .then(function(result) {
                console.log(result);
                vm.loggedUser = result.user;
                console.log(vm.loggedUser.photoURL);
            })
            .catch(function(error) {
                console.log("Error", error);
            });
    }

    function logout () {
		auth.$signOut()
            .then(function() {
                console.log("logged out");
                vm.loggedUser = null;
            })
            .catch(function(error) {
                console.log("Error", error);
            });
    }
}
