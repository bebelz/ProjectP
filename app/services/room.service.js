'use strict';

angular
	.module('projectp')

	.service('roomService', RoomService);

RoomService.$inject = ['$firebaseObject'];
function RoomService($firebaseObject) {

	this.createRoom = createRoom;
	this.getRooms = getRooms;

	function createRoom() {
		console.log('create');
	}

	function getRooms() {
		console.log('getRooms');
	}
}