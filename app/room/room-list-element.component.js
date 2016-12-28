'use strict';

angular
	.module('projectp')

	.component('roomListElement', {
		templateUrl: 'app/room/room-list-element.component.html',
		controller: roomListElementController,
		controllerAs: 'vm',
        bindings: {
            details: '='
        }
	});

function roomListElementController() {
	var vm = this;
}