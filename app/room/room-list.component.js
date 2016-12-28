'use strict';

angular
    .module('projectp')

    .component('roomList', {
        templateUrl: 'app/room/room-list.component.html',
        controller: roomListController,
        controllerAs: 'vm'
    });

roomListController.$inject = ['$firebaseArray','$mdDialog'];
function roomListController($firebaseArray,$mdDialog) {
    var vm = this;

	var refRooms = firebase.database().ref().child('rooms');
	vm.rooms = $firebaseArray(refRooms);

	vm.openCreateModal = openCreateModal;
	vm.createNewRoom = createNewRoom;

	function openCreateModal() {
		var confirm = $mdDialog.prompt()
			.title('Créer une nouvelle Room')
			// .textContent('Nom : ')
			.placeholder('Room')
			.ariaLabel('Room name')
			.ok('Créer')
			.cancel('Annuler');

		$mdDialog
			.show(confirm)
			.then(function(roomName) {
			vm.createNewRoom(roomName);
		}, function() {
			// Do nothing
		});
	}

	function createNewRoom(roomName) {
		if(!roomName) {
			return;
		}

		vm.rooms
			.$add({title: roomName})
			.then(function(ref) {
				var id = ref.key;
			});
	}
}