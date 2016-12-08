'use strict';

angular
	.module('projectp')

	.service('authService', AuthService);

AuthService.$inject = ['$firebaseAuth'];
function AuthService($firebaseAuth) {

	// Init
	var auth = $firebaseAuth();
	var loggedUser = auth.$getAuth();

	// Methods
	this.getLoggedUser = getLoggedUser;
	this.login = login;
	this.logout = logout;

	function getLoggedUser() {
		return loggedUser;
	}

	function login() {
		var provider = new firebase.auth.GoogleAuthProvider();
		auth.$signInWithPopup(provider)
			.then(function(result) {
				loggedUser = result.user;
			})
			.catch(function(error) {
				console.log("Error", error);
			});
	}

	function logout() {
		this.loggedUser = auth.$signOut()
			.then(function() {
				console.log("logged out");
				loggedUser = null;
			})
			.catch(function(error) {
				console.log("Error", error);
			});
	}
}